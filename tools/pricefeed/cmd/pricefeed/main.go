package main

import (
	"flag"
	"log"
	"pricefeed/db"
	"pricefeed/handlers"
	"pricefeed/middleware"

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

	// Public routes
	auth := r.Group("/auth")
	{
		auth.POST("/register", h.CreateAccount)
		auth.GET("/verify", h.VerifyEmail)
	}

	// API key management routes (requires API key)
	keys := r.Group("/keys")
	keys.Use(middleware.RequireAPIKey(database))
	{
		keys.POST("/", h.CreateAPIKey)
		keys.GET("/", h.ListAPIKeys)
		keys.DELETE("/:id", h.DeleteAPIKey)
	}

	// Protected routes (requires API key)
	api := r.Group("/api")
	api.Use(middleware.RequireAPIKey(database))
	{
		// Price Sources routes
		api.GET("/price-sources/:id", h.GetPriceSource)

		// Tokens routes
		// api.POST("/tokens", h.CreateToken)
		api.GET("/tokens/list", h.ListTokens)
		api.GET("/tokens/symbol/:symbol", h.GetToken)

		// Token Prices routes
		// api.POST("/token-prices", h.CreateTokenPrice)
		// api.POST("/token-prices/batch", h.BatchCreateTokenPrices)
		api.GET("/token-prices/all/:symbol", h.GetAllTokenPrices)
		api.GET("/token-prices/date/:symbol/:date", h.GetTokenPriceByDate)
		api.GET("/token-prices/dates/:symbol", h.GetTokenPricesByDates)

		// Exchange Rates routes
		// api.POST("/exchange-rates", h.CreateExchangeRate)
		api.GET("/exchange-rates/:id", h.GetExchangeRate)
	}

	if err := r.Run(":" + *port); err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
}
