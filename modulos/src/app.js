import express from 'express';
import {config} from './config.js';

//API's 
import router from './routes/precalificaciones.js'
import routerCalendario  from './routes/calendario.js';

const precalificaciones = router

const app = express();

app.set('port',config.port)
app.use(express.json())

//rutas
app.use('/API', precalificaciones)
app.use('/API', routerCalendario)

export default app