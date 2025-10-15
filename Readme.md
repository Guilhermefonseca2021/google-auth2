## Step 1: Setting Up

- [Express Session]: The express-session middleware is added. Passport uses this to maintain a login session for the user during the OAuth handshake with Google. It is secured with a secret sourced from environment variables.
- [Passport Initialization]: Passport is initialized with passport.initialize() and its session handling is enabled with passport.session(). This hooks Passport into the Express request-response cycle.
- [Passport Configuration]: The line import "./app/config/passport" is a crucial step. This imported file contains the core Passport strategy configuration. Within this configuration, the GoogleStrategy is defined, the Google Client ID and Secret are provided, and the verify callback function is implemented. This function is responsible for finding or creating a user in the database based on the profile information returned by Google.
- [Cookie Parser]: cookie-parser is included to facilitate setting custom JSON Web Tokens (JWTs) in browser cookies after a successful login.

## Guide

When a request is made to /api/v1/auth/google, the passport.authenticate('google', ...) middleware is triggered.

scope: The scope is set to ["profile", "email"]. This informs Google that the application is requesting permission to access the user's basic profile information (like name and picture) and their email address.

state: This option provides an enhanced user experience. A redirect query parameter from the frontend can be captured and passed as the state. This allows the frontend to specify where the user should be redirected after a successful login (e.g., /my-tours).