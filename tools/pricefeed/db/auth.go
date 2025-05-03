package db

import (
	"crypto/rand"
	"database/sql"
	"encoding/hex"
	"fmt"
	"pricefeed/models"
	"time"
)

func generateRandomToken(length int) (string, error) {
	bytes := make([]byte, length)
	if _, err := rand.Read(bytes); err != nil {
		return "", err
	}
	key := fmt.Sprintf("OAK-%s", hex.EncodeToString(bytes))
	return key, nil
}

func (db *DB) CreateAccount(account *models.Account) error {
	token, err := generateRandomToken(32)
	if err != nil {
		return err
	}

	result, err := db.Exec(`
		INSERT INTO accounts (email, password_hash, verification_token)
		VALUES (?, ?, ?)`,
		account.Email, account.PasswordHash, token)
	if err != nil {
		return err
	}

	account.ID, _ = result.LastInsertId()
	account.VerificationToken = token
	return nil
}

func (db *DB) GetAccountByEmail(email string) (*models.Account, error) {
	account := &models.Account{}
	err := db.QueryRow(`
		SELECT id, email, password_hash, email_verified, verification_token, created_at, updated_at
		FROM accounts WHERE email = ?`, email).
		Scan(&account.ID, &account.Email, &account.PasswordHash, &account.EmailVerified,
			&account.VerificationToken, &account.CreatedAt, &account.UpdatedAt)
	if err == sql.ErrNoRows {
		return nil, nil
	}
	if err != nil {
		return nil, err
	}
	return account, nil
}

func (db *DB) VerifyEmail(token string) error {
	result, err := db.Exec(`
		UPDATE accounts 
		SET email_verified = true, verification_token = NULL, updated_at = CURRENT_TIMESTAMP
		WHERE verification_token = ?`, token)
	if err != nil {
		return err
	}

	rows, err := result.RowsAffected()
	if err != nil {
		return err
	}
	if rows == 0 {
		return sql.ErrNoRows
	}
	return nil
}

func (db *DB) CreateAPIKey(key *models.APIKey) error {
	apiKey, err := generateRandomToken(32)
	if err != nil {
		return err
	}

	result, err := db.Exec(`
		INSERT INTO api_keys (account_id, api_key, description, valid_from, valid_to)
		VALUES (?, ?, ?, ?, ?)`,
		key.AccountID, apiKey, key.Description, time.Now(), key.ValidTo)
	if err != nil {
		return err
	}

	key.ID, _ = result.LastInsertId()
	key.APIKey = apiKey
	return nil
}

func (db *DB) GetAPIKey(apiKey string) (*models.APIKey, error) {
	key := &models.APIKey{}
	err := db.QueryRow(`
		SELECT id, account_id, api_key, description, valid_from, valid_to, created_at, updated_at
		FROM api_keys 
		WHERE api_key = ? 
		AND (valid_to IS NULL OR valid_to > CURRENT_TIMESTAMP)
		AND valid_from <= CURRENT_TIMESTAMP`, apiKey).
		Scan(&key.ID, &key.AccountID, &key.APIKey, &key.Description,
			&key.ValidFrom, &key.ValidTo, &key.CreatedAt, &key.UpdatedAt)
	if err == sql.ErrNoRows {
		return nil, nil
	}
	if err != nil {
		return nil, err
	}
	return key, nil
}

func (db *DB) ListAPIKeys(accountID int64) ([]models.APIKey, error) {
	rows, err := db.Query(`
		SELECT id, account_id, api_key, description, valid_from, valid_to, created_at, updated_at
		FROM api_keys 
		WHERE account_id = ?
		ORDER BY created_at DESC`, accountID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var keys []models.APIKey
	for rows.Next() {
		var key models.APIKey
		err := rows.Scan(&key.ID, &key.AccountID, &key.APIKey, &key.Description,
			&key.ValidFrom, &key.ValidTo, &key.CreatedAt, &key.UpdatedAt)
		if err != nil {
			return nil, err
		}
		keys = append(keys, key)
	}
	return keys, rows.Err()
}

func (db *DB) DeleteAPIKey(id int64, accountID int64) error {
	result, err := db.Exec("DELETE FROM api_keys WHERE id = ? AND account_id = ?", id, accountID)
	if err != nil {
		return err
	}

	rows, err := result.RowsAffected()
	if err != nil {
		return err
	}
	if rows == 0 {
		return sql.ErrNoRows
	}
	return nil
}
