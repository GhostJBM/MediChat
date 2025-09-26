//libreria para conectar con sql server
import mssql from 'mssql';

//configuracion de la conexion
const connectionSettings = {
    server: 'localhost',
    database: 'MediChat',
    user: 'Josiel',
    password: '1234', 
    options: {
        encrypt: true,
        trustServerCertificate: true,
        port: 1433
    }
};

//funcion para conectar a la base de datos
async function connectDB() {
    try {
        return await mssql.connect(connectionSettings);
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
}

//modulo que exporta la conexion
export {mssql, connectDB};
//referencia en x carpeta: export connectDB fromm './modulos/src/db.js'