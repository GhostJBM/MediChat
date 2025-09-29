
import app from './app.js';
import dotenv from 'dotenv';
import Cors from 'cors';

dotenv.config();

app.use(Cors());

const port = 5500;
app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
