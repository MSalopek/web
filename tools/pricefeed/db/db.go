package db

import (
	"database/sql"
	"fmt"
	"os"
	"pricefeed/models"

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

func (db *DB) InitSchema() error {
	schemaSQL, err := os.ReadFile("schema.sql")
	if err != nil {
		return fmt.Errorf("failed to read schema file: %v", err)
	}

	_, err = db.Exec(string(schemaSQL))
	if err != nil {
		return fmt.Errorf("failed to execute schema: %v", err)
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

func (db *DB) GetToken(id int64) (*models.Token, error) {
	token := &models.Token{}
	err := db.QueryRow("SELECT id, symbol, name FROM tokens WHERE id = ?", id).
		Scan(&token.ID, &token.Symbol, &token.Name)
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

func (db *DB) GetTokenPrice(id int64) (*models.TokenPrice, error) {
	tp := &models.TokenPrice{}
	err := db.QueryRow("SELECT id, token_id, price_usd, source_id, date FROM token_prices WHERE id = ?", id).
		Scan(&tp.ID, &tp.TokenID, &tp.PriceUSD, &tp.SourceID, &tp.Date)
	if err != nil {
		return nil, err
	}
	return tp, nil
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
