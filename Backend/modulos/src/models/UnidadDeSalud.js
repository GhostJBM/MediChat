import {DataTypes} from 'sequelize';
import {sequelize} from './index.js';

const UnidadDeSalud = sequelize.define('UnidadDeSalud', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    Tipo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    latitud: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    longitud: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }}, {
        timestamps: true,
        tableName: 'UnidadDeSalud'
    });

export default UnidadDeSalud;