import express from 'express';
import {config} from './config.js';
import dotenv from "dotenv";

//API's 
import router from './routes/precalificaciones.js'
import routerCalendario  from './routes/calendario.js';
import routerMap from './routes/mapsRoutes.js';

dotenv.config();

const precalificaciones = router

const app = express();

app.set('port',config.port)
app.use(express.json())


//rutas
app.use('/API', precalificaciones)
app.use('/API', routerCalendario)
app.use('/API', routerMap)


export default app