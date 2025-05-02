package models

import "time"

type PriceSource struct {
	ID          int64  `json:"id"`
	Name        string `json:"name"`
	Description string `json:"description,omitempty"`
}

type Token struct {
	ID          int64  `json:"id"`
	Symbol      string `json:"symbol"`
	Name        string `json:"name"`
	CoingeckoID string `json:"coingecko_id"`
}

type TokenPrice struct {
	ID       int64     `json:"id"`
	TokenID  int64     `json:"token_id"`
	PriceUSD float64   `json:"price_usd"`
	SourceID int64     `json:"source_id"`
	Date     time.Time `json:"date"`
}

type ExchangeRate struct {
	ID             int64     `json:"id"`
	BaseCurrency   string    `json:"base_currency"`
	TargetCurrency string    `json:"target_currency"`
	Rate           float64   `json:"rate"`
	Timestamp      time.Time `json:"timestamp"`
}

// BatchTokenPriceRequest represents a request to insert multiple token prices
type BatchTokenPriceRequest struct {
	Prices []TokenPrice `json:"prices"`
}
