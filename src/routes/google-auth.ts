import { Router, type NextFunction, type Request, type Response } from "express";
import passport from "passport";
import googleCallbackController from "../controllers/googleCallbackController.js";

const routes = Router()

routes.get('/google', async (req: Request, res: Response, next: NextFunction) => {
    const redirect = req.query.redirect || '/';
    passport.authenticate('google', {
        scope: ['profile', 'email'],
        state: redirect as string,
    })(req, res, next);
})

routes.get(
    '/google/callback', passport.authenticate('google', { failureRedirect: '/login'}),
    googleCallbackController 
)

