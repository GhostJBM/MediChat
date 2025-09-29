import express from 'express';
import {config} from './config.js';
import dotenv from "dotenv";

//API's 
import router from './routes/precalificaciones.js'
import routerCalendario  from './routes/calendario.js';
import routerMap from './routes/mapsRoutes.js';
import routerInfoSalud from './routes/infoSalud.js';
import routerChatBot from './routes/chat.js';
import Cors from 'cors'

dotenv.config();

const precalificaciones = router

const app = express();


app.use(Cors());

app.set('port',config.port)
app.use(express.json())


//rutas
app.use('/API', precalificaciones)
app.use('/API', routerCalendario)
app.use('/API', routerMap)
app.use('/API', routerInfoSalud)
app.use('/API', routerChatBot)

export default app