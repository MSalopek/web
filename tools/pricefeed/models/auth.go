package models

import "time"

type Account struct {
	ID                int64     `json:"id"`
	Email             string    `json:"email"`
	PasswordHash      string    `json:"-"`
	EmailVerified     bool      `json:"email_verified"`
	VerificationToken string    `json:"-"`
	CreatedAt         time.Time `json:"created_at"`
	UpdatedAt         time.Time `json:"updated_at"`
}

type APIKey struct {
	ID          int64      `json:"id,omitempty"`
	AccountID   int64      `json:"account_id,omitempty"`
	APIKey      string     `json:"api_key"`
	Description string     `json:"description"`
	ValidFrom   time.Time  `json:"valid_from"`
	ValidTo     *time.Time `json:"valid_to,omitempty"`
	CreatedAt   time.Time  `json:"created_at"`
	UpdatedAt   time.Time  `json:"updated_at"`
}

type CreateAccountRequest struct {
	Email    string `json:"email" binding:"required,email"`
	Password string `json:"password" binding:"required,min=8"`
}

type CreateAPIKeyRequest struct {
	Description string     `json:"description"`
	ValidTo     *time.Time `json:"valid_to,omitempty"`
}
