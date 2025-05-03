package handlers

import (
	"database/sql"
	"net/http"
	"pricefeed/models"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

func (h *Handler) CreateAccount(c *gin.Context) {
	var req models.CreateAccountRequest
	if err := c.BindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Check if account already exists
	existing, err := h.db.GetAccountByEmail(req.Email)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to check existing account"})
		return
	}
	if existing != nil {
		c.JSON(http.StatusConflict, gin.H{"error": "Email already registered"})
		return
	}

	// Hash password
	hash, err := bcrypt.GenerateFromPassword([]byte(req.Password), bcrypt.DefaultCost)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to hash password"})
		return
	}

	account := &models.Account{
		Email:        req.Email,
		PasswordHash: string(hash),
	}

	if err := h.db.CreateAccount(account); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create account"})
		return
	}

	// TODO: Send verification email with account.VerificationToken

	c.JSON(http.StatusCreated, gin.H{
		"message": "Account created successfully. Please check your email for verification.",
	})
}

func (h *Handler) VerifyEmail(c *gin.Context) {
	token := c.Query("token")
	if token == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Verification token is required"})
		return
	}

	err := h.db.VerifyEmail(token)
	if err == sql.ErrNoRows {
		c.JSON(http.StatusNotFound, gin.H{"error": "Invalid or expired verification token"})
		return
	}
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to verify email"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Email verified successfully"})
}

func (h *Handler) CreateAPIKey(c *gin.Context) {
	accountID := c.GetInt64("account_id")

	var req models.CreateAPIKeyRequest
	if err := c.BindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	key := &models.APIKey{
		AccountID:   accountID,
		Description: req.Description,
		ValidTo:     req.ValidTo,
	}

	if err := h.db.CreateAPIKey(key); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create API key"})
		return
	}

	c.JSON(http.StatusCreated, key)
}

func (h *Handler) ListAPIKeys(c *gin.Context) {
	accountID := c.GetInt64("account_id")

	keys, err := h.db.ListAPIKeys(accountID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to list API keys"})
		return
	}

	c.JSON(http.StatusOK, keys)
}

func (h *Handler) DeleteAPIKey(c *gin.Context) {
	accountID := c.GetInt64("account_id")
	keyID := c.GetInt64("id")

	err := h.db.DeleteAPIKey(keyID, accountID)
	if err == sql.ErrNoRows {
		c.JSON(http.StatusNotFound, gin.H{"error": "API key not found"})
		return
	}
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to delete API key"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "API key deleted successfully"})
}
