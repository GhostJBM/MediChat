/*
Esta API debe recibir síntomas como entrada y devolver una lista de enfermedades comunes relacionadas,
junto con recomendaciones básicas.
*/

import express  from 'express';
import {connectDB, mssql}  from '../db.js'; 

const router = express.Router()

router.post('/enfermedades', async (req,res) => {
  
    try{
      const { sintomas } = req.body

    const pool = await connectDB()
    const condicion = sintomas.map(s => `sintomas LIKE '%${s}%'`).join(`  OR `)
    const result = await pool.request().query(`SELECT nombre, descripcion, recomendaciones
        FROM Enfermedades
        WHERE ${condicion}
        `);

    res.json({ enfermedades: result.recordset })
    }
    
catch (error) {
  res.status(500).send("Error al obtener precalificaciones");
}})

export default router;