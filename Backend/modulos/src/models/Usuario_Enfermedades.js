import {DataTypes} from 'sequelize';
import {sequelize} from './index.js';

const Usuario_Enfermedades = sequelize.define('Usuario_Enfermedades', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idEnfermedad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fechaConsulta: {
        type: DataTypes.DATE,
        allowNull: false
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }}, {
        timestamps: true,
        tableName: 'Usuario_Enfermedades'
    });

    export default Usuario_Enfermedades;