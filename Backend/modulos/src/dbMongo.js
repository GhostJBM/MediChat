import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/Medichat', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then().catch(err => console.error('Error al conectar MongoDB', err));

export default mongoose;

