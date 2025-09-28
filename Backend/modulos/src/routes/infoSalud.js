import express from 'express';
import bodyParser from "body-parser";
import recomendaciones from '../models/informacionSalud.js';

const routerInfoSalud = express.Router();
routerInfoSalud.use(bodyParser.json())


routerInfoSalud.get('/informacionSalud', async (req, res) => {
  try {
    console.log("Solicitud recibida en /informacionSalud");
    const todas = await recomendaciones.find();
    console.log("Documentos encontrados:", todas);
    res.status(200).json(todas);
  } catch (err) {
    console.error("Error en la ruta /informacionSalud:", err);
    res.status(500).json({ error: "Error interno del servidor" });
}
});


export default routerInfoSalud;