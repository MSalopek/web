package main

import (
	"log"
	"pricefeed/db"
	"pricefeed/handlers"

	"github.com/gin-gonic/gin"
)

func main() {
	// Initialize database
	database, err := db.New("pricefeed.db")
	if err != nil {
		log.Fatalf("Failed to initialize database: %v", err)
	}
	defer database.Close()

	// Initialize schema
	if err := database.InitSchema(); err != nil {
		log.Fatalf("Failed to initialize schema: %v", err)
	}

	// Initialize handlers
	h := handlers.New(database)

	// Setup router
	r := gin.Default()

	// Price Sources routes
	r.POST("/price-sources", h.CreatePriceSource)
	r.GET("/price-sources/:id", h.GetPriceSource)

	// Tokens routes
	r.POST("/tokens", h.CreateToken)
	r.GET("/tokens/:id", h.GetToken)

	// Token Prices routes
	r.POST("/token-prices", h.CreateTokenPrice)
	r.POST("/token-prices/batch", h.BatchCreateTokenPrices)
	r.GET("/token-prices/:id", h.GetTokenPrice)

	// Exchange Rates routes
	r.POST("/exchange-rates", h.CreateExchangeRate)
	r.GET("/exchange-rates/:id", h.GetExchangeRate)

	// Start server
	if err := r.Run(":8080"); err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
}
