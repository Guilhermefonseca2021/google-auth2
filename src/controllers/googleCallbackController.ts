import type { NextFunction, Request, Response } from "express";
import config from "../config/auth.js";

const googleCallbackController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Retrieve the original redirect path from the state query parameter
  let redirectTo = req.query.state ? (req.query.state as string) : "";

  if (redirectTo.startsWith("/")) {
    redirectTo = redirectTo.slice(1);
  }

  // Get the user object attached by Passport
  const user = req.user;

  if (!user) {
    throw new Error("User Not Found");
  }

  // Create application-specific JWTs
  // const tokenInfo = createUserTokens(user);

  // Set JWTs as secure, httpOnly cookies
  // setAuthCookie(res, tokenInfo);

  // Redirect the user back to the frontend
  res.redirect(`${config.frontendUrl}/${redirectTo}`);
};

export default googleCallbackController;
