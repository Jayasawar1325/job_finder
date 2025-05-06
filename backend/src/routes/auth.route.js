import {Router} from 'express';
import { adminLogin, signIn, signOut, signUp } from '../controllers/auth.controller.js';
import { verifyJWT } from '../middlewares/auth.middleware.js';
const authRouter = Router();
authRouter.post('/signup',signUp)
authRouter.post('/signin',verifyJWT,signIn)
authRouter.post('/signout',verifyJWT,signOut)
authRouter.post('/admin',adminLogin,adminLogin)
export {authRouter}