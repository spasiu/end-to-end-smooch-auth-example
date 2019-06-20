# What it is

A demo showing auth invalidation and re-auth every 15 seconds.

# How to run it

Run the node service with `npm start` and make sure to set environment variables for `KEY_ID`, `SECRET` (Smooch app scoped secret key pair) and `PORT` (defaults to 4000).

Visit the service (e.g., *http://localhost:4000?app_id=YOUR_APP_ID&user_id=ANY_USER_ID*).

Tokens will be generated with 15 second expirations.
