INSERT INTO accounts (email, password_hash, verification_token) VALUES ('dev@occu-dev.com', 'password', 'token-verify-test-account');

INSERT INTO api_keys (account_id, api_key, description, valid_from, valid_to) VALUES (1, 'occu-dev-api-key-1', 'API key for occu-dev', '2024-01-01', null);

