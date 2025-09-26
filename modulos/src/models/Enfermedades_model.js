import {DataTypes} from 'sequelize';
import {sequelize} from './index.js';

const Enfermedades = sequelize.define('Enfermedades', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    recomedaciones: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }}, {
        timestamps: true,
        tableName: 'enfermedades'
    });

export default Enfermedades;

    