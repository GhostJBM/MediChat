import express from 'express';
import {config} from './config.js';

//API's 
import router from './routes/precalificaciones.js'

const precalificaciones = router

const app = express();

app.set('port',config.port)

//rutas
app.use('/API', precalificaciones)

export default app