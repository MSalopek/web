package db

import (
	"database/sql"
	"fmt"
	"os"
	"pricefeed/models"
	"strings"

	_ "github.com/mattn/go-sqlite3"
)

type DB struct {
	*sql.DB
}

func New(dbPath string) (*DB, error) {
	db, err := sql.Open("sqlite3", dbPath)
	if err != nil {
		return nil, err
	}

	return &DB{db}, nil
}

func (db *DB) InitSchema(schemaDir string) error {
	schemaSQL, err := os.ReadFile(schemaDir + "/schema.sql")
	if err != nil {
		return fmt.Errorf("failed to read schema file: %v", err)
	}

	_, err = db.Exec(string(schemaSQL))
	if err != nil {
		return fmt.Errorf("failed to execute schema: %v", err)
	}

	// check if there's data in the database
	var count int
	err = db.QueryRow("SELECT COUNT(*) FROM price_sources").Scan(&count)
	if err != nil {
		return fmt.Errorf("failed to check if there's data in the database: %v", err)
	}

	if count > 0 {
		return nil
	}

	// if there's no data, load the data from the data directory
	initData, err := os.ReadFile(schemaDir + "/init.sql")
	if err != nil {
		return fmt.Errorf("failed to read init file: %v", err)
	}

	_, err = db.Exec(string(initData))
	if err != nil {
		return fmt.Errorf("failed to execute init: %v", err)
	}
	return nil
}

// PriceSource CRUD
func (db *DB) CreatePriceSource(ps *models.PriceSource) error {
	result, err := db.Exec("INSERT INTO price_sources (name, description) VALUES (?, ?)",
		ps.Name, ps.Description)
	if err != nil {
		return err
	}
	ps.ID, _ = result.LastInsertId()
	return nil
}

func (db *DB) GetPriceSource(id int64) (*models.PriceSource, error) {
	ps := &models.PriceSource{}
	err := db.QueryRow("SELECT id, name, description FROM price_sources WHERE id = ?", id).
		Scan(&ps.ID, &ps.Name, &ps.Description)
	if err != nil {
		return nil, err
	}
	return ps, nil
}

// Token CRUD
func (db *DB) CreateToken(token *models.Token) error {
	result, err := db.Exec("INSERT INTO tokens (symbol, name) VALUES (?, ?)",
		token.Symbol, token.Name)
	if err != nil {
		return err
	}
	token.ID, _ = result.LastInsertId()
	return nil
}

func (db *DB) GetToken(symbol string) (*models.Token, error) {
	token := &models.Token{}
	err := db.QueryRow("SELECT symbol, name, coingecko_id FROM tokens WHERE symbol = ?", symbol).
		Scan(&token.Symbol, &token.Name, &token.CoingeckoID)
	if err != nil {
		return nil, err
	}
	return token, nil
}

// TokenPrice CRUD
func (db *DB) CreateTokenPrice(tp *models.TokenPrice) error {
	result, err := db.Exec("INSERT INTO token_prices (token_id, price_usd, source_id, date) VALUES (?, ?, ?, ?)",
		tp.TokenID, tp.PriceUSD, tp.SourceID, tp.Date)
	if err != nil {
		return err
	}
	tp.ID, _ = result.LastInsertId()
	return nil
}

func (db *DB) BatchCreateTokenPrices(prices []models.TokenPrice) error {
	tx, err := db.Begin()
	if err != nil {
		return err
	}
	defer tx.Rollback()

	stmt, err := tx.Prepare("INSERT INTO token_prices (token_id, price_usd, source_id, date) VALUES (?, ?, ?, ?)")
	if err != nil {
		return err
	}
	defer stmt.Close()

	for _, tp := range prices {
		_, err = stmt.Exec(tp.TokenID, tp.PriceUSD, tp.SourceID, tp.Date)
		if err != nil {
			return err
		}
	}

	return tx.Commit()
}

func (db *DB) GetAllTokenPrices(symbol string) ([]models.TokenPrice, error) {
	rows, err := db.Query(`
		SELECT tp.price_usd, tp.date 
		FROM token_prices tp
		JOIN tokens t ON t.id = tp.token_id
		WHERE t.symbol = ?
		ORDER BY tp.date`, symbol)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var prices []models.TokenPrice
	for rows.Next() {
		var tp models.TokenPrice
		if err := rows.Scan(&tp.PriceUSD, &tp.Date); err != nil {
			return nil, err
		}
		prices = append(prices, tp)
	}

	if err = rows.Err(); err != nil {
		return nil, err
	}

	return prices, nil
}

// ExchangeRate CRUD
func (db *DB) CreateExchangeRate(er *models.ExchangeRate) error {
	result, err := db.Exec("INSERT INTO exchange_rates (base_currency, target_currency, rate, timestamp) VALUES (?, ?, ?, ?)",
		er.BaseCurrency, er.TargetCurrency, er.Rate, er.Timestamp)
	if err != nil {
		return err
	}
	er.ID, _ = result.LastInsertId()
	return nil
}

func (db *DB) GetExchangeRate(id int64) (*models.ExchangeRate, error) {
	er := &models.ExchangeRate{}
	err := db.QueryRow("SELECT id, base_currency, target_currency, rate, timestamp FROM exchange_rates WHERE id = ?", id).
		Scan(&er.ID, &er.BaseCurrency, &er.TargetCurrency, &er.Rate, &er.Timestamp)
	if err != nil {
		return nil, err
	}
	return er, nil
}

func (db *DB) GetTokenPriceByDate(symbol string, date string) (*models.TokenPrice, error) {
	tp := &models.TokenPrice{}
	err := db.QueryRow(`
        SELECT tp.price_usd, tp.date 
        FROM token_prices tp
        JOIN tokens t ON t.id = tp.token_id
        WHERE t.symbol = ? AND tp.date = ?
    `, symbol, date).Scan(&tp.PriceUSD, &tp.Date)
	if err != nil {
		return nil, err
	}
	return tp, nil
}

// GetTokenPricesByDates fetches token prices for multiple dates
func (db *DB) GetTokenPricesByDates(symbol string, dates []string) ([]models.TokenPrice, error) {
	// Create the placeholders for the IN clause
	placeholders := make([]string, len(dates))
	args := make([]interface{}, len(dates)+1)
	args[0] = symbol
	for i := range dates {
		placeholders[i] = "?"
		args[i+1] = dates[i]
	}

	query := fmt.Sprintf(`
        SELECT tp.price_usd, tp.date 
        FROM token_prices tp
        JOIN tokens t ON t.id = tp.token_id
        WHERE t.symbol = ? AND tp.date IN (%s)
        ORDER BY tp.date
    `, strings.Join(placeholders, ","))

	rows, err := db.Query(query, args...)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var prices []models.TokenPrice
	for rows.Next() {
		var tp models.TokenPrice
		if err := rows.Scan(&tp.PriceUSD, &tp.Date); err != nil {
			return nil, err
		}
		prices = append(prices, tp)
	}

	if err = rows.Err(); err != nil {
		return nil, err
	}

	return prices, nil
}

// ListTokens returns all tokens ordered by symbol
func (db *DB) ListTokens() ([]string, error) {
	rows, err := db.Query(`
        SELECT symbol 
        FROM tokens 
        ORDER BY symbol
    `)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var tokens []models.Token
	for rows.Next() {
		var token models.Token
		if err := rows.Scan(&token.Symbol); err != nil {
			return nil, err
		}
		tokens = append(tokens, token)
	}

	if err = rows.Err(); err != nil {
		return nil, err
	}

	tokenSymbols := make([]string, len(tokens))
	for i, token := range tokens {
		tokenSymbols[i] = token.Symbol
	}

	return tokenSymbols, nil
}
