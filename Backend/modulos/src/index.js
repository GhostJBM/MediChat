import app from './app.js';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.port || 5500;

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});

