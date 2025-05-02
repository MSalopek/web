package main

import (
	"flag"
	"log"
	"pricefeed/db"
	"pricefeed/handlers"

	"github.com/gin-gonic/gin"
)

func main() {
	dbPath := flag.String("db", "pricefeed.db", "path to the database file")
	dbSchemaDir := flag.String("db-schema-dir", "db", "path to the database schema directory")
	port := flag.String("port", "8080", "port to run the server on")
	flag.Parse()

	if *dbSchemaDir == "" {
		log.Fatalf("db-schema-dir is required")
	}

	// Initialize database
	database, err := db.New(*dbPath)
	if err != nil {
		log.Fatalf("Failed to initialize database: %v", err)
	}
	defer database.Close()

	if err := database.InitSchema(*dbSchemaDir); err != nil {
		log.Fatalf("Failed to initialize schema: %v", err)
	}

	h := handlers.New(database)
	r := gin.Default()

	// Price Sources routes
	// r.POST("/price-sources", h.CreatePriceSource)
	r.GET("/price-sources/:id", h.GetPriceSource)

	// Tokens routes
	// r.POST("/tokens", h.CreateToken)
	r.GET("/tokens/list", h.ListTokens)
	r.GET("/tokens/symbol/:symbol", h.GetToken)

	// Token Prices routes
	// r.POST("/token-prices", h.CreateTokenPrice)
	// r.POST("/token-prices/batch", h.BatchCreateTokenPrices)
	r.GET("/token-prices/all/:symbol", h.GetAllTokenPrices)
	r.GET("/token-prices/date/:symbol/:date", h.GetTokenPriceByDate)
	r.GET("/token-prices/dates/:symbol", h.GetTokenPricesByDates)

	// Exchange Rates routes
	// r.POST("/exchange-rates", h.CreateExchangeRate)
	r.GET("/exchange-rates/:id", h.GetExchangeRate)

	if err := r.Run(":" + *port); err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
}
