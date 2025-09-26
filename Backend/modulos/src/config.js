import dotenv from 'dotenv'
import app from './app.js';

 export const config = {
    app:{
        port: process.env.port || 3000,
    }
};

