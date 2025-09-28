import mongoose from "../dbMongo.js";


const informacionSaludSchema = new mongoose.Schema({
  titulo: String,
  descripcion: String,
  categoria: String,
  PublicoObjetivo: [String],
  tags: [String]
});


const recomendaciones = mongoose.model('informacionsaluds', informacionSaludSchema, 'informacionSalud')

export default recomendaciones;