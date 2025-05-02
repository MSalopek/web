package handlers

import (
	"net/http"
	"pricefeed/db"
	"pricefeed/models"
	"strconv"

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
	id, err := strconv.ParseInt(c.Param("id"), 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid id"})
		return
	}

	token, err := h.db.GetToken(id)
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

func (h *Handler) GetTokenPrice(c *gin.Context) {
	id, err := strconv.ParseInt(c.Param("id"), 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid id"})
		return
	}

	tp, err := h.db.GetTokenPrice(id)
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
