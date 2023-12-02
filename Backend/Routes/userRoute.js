import express from 'express';

import {signupOtp,signupValidation} from '../Controller/signupController.js';
import {login,logout} from '../Controller/loginController.js'
import {forgotPassword,resetPassword} from '../Controller/passwordController.js';


const userRouter = express.Router();

userRouter.post('/signupOtp', signupOtp);

userRouter.post('/signupValidation', signupValidation);

userRouter.get('/login', login);

userRouter.get('/logout', logout);

userRouter.get('/forgotPassword', forgotPassword);

userRouter.put('/resetPassword', resetPassword);

export default userRouter;