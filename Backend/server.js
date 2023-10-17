import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

//internal imports  
import {pageNotFound,defaultErrorHandle} from './Middleware/defaultErrorHandle.js';

//App Initialized
const app = express();
const dotenvConfig = dotenv.config();

// Default Middlewares
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

// CORS settings
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

// Default Error Handle
app.use(pageNotFound);
app.use(defaultErrorHandle);

// Server Started
app.listen(process.env.PORT,() => {
    console.log(`Server is running on port: ${process.env.port}`);
});