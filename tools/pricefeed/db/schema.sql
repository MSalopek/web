CREATE TABLE IF NOT EXISTS price_sources (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(50) NOT NULL,
    description TEXT,
    CONSTRAINT idx_name UNIQUE (name)
);

CREATE TABLE IF NOT EXISTS tokens (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    symbol VARCHAR(10) NOT NULL,
    name VARCHAR(100) NOT NULL,
    coingecko_id VARCHAR(100),
    CONSTRAINT idx_symbol UNIQUE (symbol)
);

CREATE INDEX IF NOT EXISTS idx_symbol ON tokens(symbol);

CREATE TABLE IF NOT EXISTS token_prices (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    token_id INTEGER NOT NULL,
    price_usd DECIMAL(20, 8) NOT NULL,
    source_id INTEGER NOT NULL,
    date DATE NOT NULL,
    
    FOREIGN KEY (token_id) REFERENCES tokens(id),
    FOREIGN KEY (source_id) REFERENCES price_sources(id),
    CONSTRAINT idx_unique_daily_price UNIQUE (token_id, source_id, date)
);

CREATE INDEX IF NOT EXISTS idx_date ON token_prices(date);
CREATE INDEX IF NOT EXISTS idx_token ON token_prices(token_id);

CREATE TABLE IF NOT EXISTS exchange_rates (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    base_currency VARCHAR(3) NOT NULL,
    target_currency VARCHAR(3) NOT NULL,
    rate DECIMAL(10, 6) NOT NULL,
    timestamp DATETIME NOT NULL,
    CONSTRAINT idx_unique_rate UNIQUE (base_currency, target_currency, timestamp)
);

CREATE INDEX IF NOT EXISTS idx_timestamp ON exchange_rates(timestamp);
CREATE INDEX IF NOT EXISTS idx_base_currency ON exchange_rates(base_currency);

DROP VIEW IF EXISTS token_prices_with_fiat;

CREATE VIEW token_prices_with_fiat AS
SELECT 
    tp.id,
    t.symbol as token_symbol,
    ps.name as price_source,
    tp.date,
    er.target_currency,
    tp.price_usd,
    ROUND(tp.price_usd * er.rate, 8) as price_in_target_currency
FROM token_prices tp
JOIN tokens t ON t.id = tp.token_id
JOIN price_sources ps ON ps.id = tp.source_id
JOIN exchange_rates er ON DATE(er.timestamp) = tp.date
WHERE er.base_currency = 'USD';

-- usage examples:
-- Get Bitcoin prices in EUR for a specific date
-- SELECT * 
-- FROM token_prices_with_fiat 
-- WHERE token_symbol = 'BTC' 
-- AND target_currency = 'EUR'
-- AND date = '2024-03-14';

-- -- Get latest prices in multiple currencies for a token
-- SELECT * 
-- FROM token_prices_with_fiat 
-- WHERE token_symbol = 'ETH' 
-- AND date = (
--     SELECT MAX(date) 
--     FROM token_prices_with_fiat 
--     WHERE token_symbol = 'ETH'
-- );

-- -- Compare prices across different currencies
-- SELECT 
--     token_symbol,
--     date,
--     target_currency,
--     AVG(price_in_target_currency) as avg_price
-- FROM token_prices_with_fiat
-- WHERE date >= date('now', '-7 days')
-- GROUP BY token_symbol, date, target_currency
-- ORDER BY token_symbol, date, target_currency;

CREATE TABLE IF NOT EXISTS accounts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email VARCHAR(255) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    email_verified BOOLEAN DEFAULT FALSE,
    verification_token VARCHAR(64),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT idx_email UNIQUE (email)
);

CREATE TABLE IF NOT EXISTS api_keys (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    account_id INTEGER NOT NULL,
    api_key VARCHAR(64) NOT NULL,
    description TEXT,
    valid_from DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    valid_to DATETIME,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (account_id) REFERENCES accounts(id) ON DELETE CASCADE,
    CONSTRAINT idx_api_key UNIQUE (api_key)
);

CREATE INDEX IF NOT EXISTS idx_api_key ON api_keys(api_key);
CREATE INDEX IF NOT EXISTS idx_account_id ON api_keys(account_id);
