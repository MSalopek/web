package middleware

import (
	"net/http"
	"pricefeed/db"
	"pricefeed/models"
	"sync"
	"time"

	"github.com/gin-gonic/gin"
)

type cachedKey struct {
	key       *models.APIKey
	timestamp time.Time
}

var (
	keyCache sync.Map
	cacheTTL = 60 * time.Minute
)

func RequireAPIKey(db *db.DB) gin.HandlerFunc {
	return func(c *gin.Context) {
		apiKey := c.GetHeader("x-occu-api-key")
		if apiKey == "" {
			c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "API key required"})
			return
		}

		// check cache first
		if cached, ok := keyCache.Load(apiKey); ok {
			cachedValue := cached.(cachedKey)
			if time.Since(cachedValue.timestamp) < cacheTTL {
				if cachedValue.key != nil {
					c.Set("account_id", cachedValue.key.AccountID)
					c.Next()
					return
				}
			}
			keyCache.Delete(apiKey)
		}

		key, err := db.GetAPIKey(apiKey)
		if err != nil {
			c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"error": "Failed to validate API key"})
			return
		}

		// store in cache (even if key is nil, to cache invalid keys)
		keyCache.Store(apiKey, cachedKey{
			key:       key,
			timestamp: time.Now(),
		})

		if key == nil {
			c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "Invalid or expired API key"})
			return
		}

		c.Set("account_id", key.AccountID)
		c.Next()
	}
}
