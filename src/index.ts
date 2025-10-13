import cookieParser from "cookie-parser";
import express from "express";
import expressSession from "express-session";
import passport from "passport";
import config from "./config/auth.js";

const app = express();

app.use(
  expressSession({
    secret: config.envVars,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(cookieParser());

app.listen(config.port, () => console.log('server is runnint at', config.port));