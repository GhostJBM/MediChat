import app from './app.js'

const port = process.env.port || 5500;

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});

