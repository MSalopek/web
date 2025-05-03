package handlers

type PriceResponse struct {
	Date  string  `json:"date"`
	Price float64 `json:"price"`
}

type PricesResponse struct {
	Prices []PriceResponse `json:"prices"`
}
