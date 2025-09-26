/*
Esta API debe devolver los datos sobre los eventos para el calendario
*/

import express  from 'express';
import {connectDB, mssql}  from '../db.js'; 

const routerCalendario = express.Router()

routerCalendario.get('/Calendario', async (req,res) => {
  
    try{

    const pool = await connectDB()
    const result = await pool.request().query(`SELECT Nombre,descripcion,fechaInicio,fechaFinal,tipo
        FROM Eventos
        `);

    res.json({ Calendario : result.recordset })
    }
    
catch (error) {
  res.status(500).send("Error al obtener precalificaciones");
}})

export default routerCalendario;