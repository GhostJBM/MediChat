import mssql from 'mssql';

const connectionSettings = {
    server: 'localhost',
    database: 'MediChat',
    user: 'Josiel', // tu usuario SQL Server
    password: '1234', // tu contraseña SQL Server
    options: {
        encrypt: true,
        trustServerCertificate: true,
        port: 1433
    }
};

async function connectDB() {
    try {
        await mssql.connect(connectionSettings);
        console.log('Conexión exitosa a la base de datos');
        return mssql;
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
}

export default connectDB();