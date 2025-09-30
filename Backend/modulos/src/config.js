import dotenv from 'dotenv'
import app from './app.js';

 export const config = {
    //Google Credenciales
    GOOGLE_PROJECT_ID:'apimedichat',
    DF_LANGUAGE_CODE: 'es',
    GOOGLE_CLIENT_EMAIL:"josiel@apimedichat.iam.gserviceaccount.com",
    GOOGLE_PRIVATE_KEY:"Key dialogFlow",
    app:{
        port: process.env.port || 3000,
    }
};


