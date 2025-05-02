package handlers

import (
	"database/sql"
	"net/http"
	"pricefeed/db"
	"pricefeed/models"
	"strconv"
	"strings"
	"time"

	"github.com/gin-gonic/gin"
)

type Handler struct {
	db *db.DB
}

func New(db *db.DB) *Handler {
	return &Handler{db: db}
}

// PriceSource handlers
func (h *Handler) CreatePriceSource(c *gin.Context) {
	var ps models.PriceSource
	if err := c.BindJSON(&ps); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := h.db.CreatePriceSource(&ps); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusCreated, ps)
}

func (h *Handler) GetPriceSource(c *gin.Context) {
	id, err := strconv.ParseInt(c.Param("id"), 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid id"})
		return
	}

	ps, err := h.db.GetPriceSource(id)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "price source not found"})
		return
	}

	c.JSON(http.StatusOK, ps)
}

// Token handlers
func (h *Handler) CreateToken(c *gin.Context) {
	var token models.Token
	if err := c.BindJSON(&token); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := h.db.CreateToken(&token); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusCreated, token)
}

func (h *Handler) GetToken(c *gin.Context) {
	symbol := c.Param("symbol")
	if symbol == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid symbol"})
		return
	}

	token, err := h.db.GetToken(symbol)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "token not found"})
		return
	}

	c.JSON(http.StatusOK, token)
}

// TokenPrice handlers
func (h *Handler) CreateTokenPrice(c *gin.Context) {
	var tp models.TokenPrice
	if err := c.BindJSON(&tp); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := h.db.CreateTokenPrice(&tp); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusCreated, tp)
}

func (h *Handler) BatchCreateTokenPrices(c *gin.Context) {
	var req models.BatchTokenPriceRequest
	if err := c.BindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := h.db.BatchCreateTokenPrices(req.Prices); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"message": "batch created successfully"})
}

func (h *Handler) GetAllTokenPrices(c *gin.Context) {
	symbol := c.Param("symbol")
	if symbol == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid symbol"})
		return
	}

	tp, err := h.db.GetAllTokenPrices(symbol)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "token price not found"})
		return
	}

	c.JSON(http.StatusOK, tp)
}

// ExchangeRate handlers
func (h *Handler) CreateExchangeRate(c *gin.Context) {
	var er models.ExchangeRate
	if err := c.BindJSON(&er); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := h.db.CreateExchangeRate(&er); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusCreated, er)
}

func (h *Handler) GetExchangeRate(c *gin.Context) {
	id, err := strconv.ParseInt(c.Param("id"), 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid id"})
		return
	}

	er, err := h.db.GetExchangeRate(id)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "exchange rate not found"})
		return
	}

	c.JSON(http.StatusOK, er)
}

// GetTokenPriceByDate handles GET /token-prices/by-date/:symbol/:date
func (h *Handler) GetTokenPriceByDate(c *gin.Context) {
	symbol := c.Param("symbol")
	date := c.Param("date")

	if symbol == "" || date == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "symbol and date are required"})
		return
	}

	price, err := h.db.GetTokenPriceByDate(symbol, date)
	if err != nil {
		if err == sql.ErrNoRows {
			c.JSON(http.StatusNotFound, gin.H{"error": "price not found"})
			return
		}
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, price)
}

func (h *Handler) GetTokenPricesByDates(c *gin.Context) {
	symbol := c.Param("symbol")
	datesStr := c.Query("dates")

	if symbol == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "symbol is required"})
		return
	}
	if datesStr == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "dates parameter is required"})
		return
	}

	dates := strings.Split(datesStr, ",")
	for _, date := range dates {
		if _, err := time.Parse("2006-01-02", strings.TrimSpace(date)); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "invalid date format, expected YYYY-MM-DD"})
			return
		}
	}

	prices, err := h.db.GetTokenPricesByDates(symbol, dates)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, prices)
}

func (h *Handler) ListTokens(c *gin.Context) {
	tokens, err := h.db.ListTokens()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, tokens)
}
