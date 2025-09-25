import mssql from 'mssql';

const connectionSettings = {
    server: 'localhost',
    database: 'MediChat',
    options: {
        encrypt: true,
        trustServerCertificate: true,
        port: 1433 // puedes quitarlo si usas puerto dinámico
    },
    authentication: {
        type: 'ntlm',
        options: {
            domain: process.env.USERDOMAIN || '',
            userName: 'Josiel',
            password: '1234'
        }
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

export { connectDB };
