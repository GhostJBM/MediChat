/*
Esta API debe recibir síntomas como entrada y devolver una lista de enfermedades comunes relacionadas,
junto con recomendaciones básicas.
*/

import express  from 'express';
import {connectDB, mssql}  from '../db.js'; 

const router = express.Router()

router.get('/enfermedades', async (req,res) => {
    try{
    const pool = await connectDB()
    const result = await pool.request().query(`SELECT nombre, descripcion, recomendaciones
        FROM Enfermedades' 
        `);

    console.log(result)
    }
    
catch (error) {
  res.status(500).send("Error al obtener precalificaciones");
}})

export default router;