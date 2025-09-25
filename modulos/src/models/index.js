import {sequelize} from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new sequelize(
    proccess.env.DB_NAME,
    proccess.env.DB_USER,
    proccess.env.DB_PASS,
    {
        host: proccess.env.DB_HOST,
        dialect: 'mssql',
        logging: false,
        dialectOptions: {
            options: {
                encrypt: true,
                trustServerCertificate: true
            }
        }
    }
);
    

export default sequelize;