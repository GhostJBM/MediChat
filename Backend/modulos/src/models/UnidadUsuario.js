import {DataTypes} from 'sequelize';
import {sequelize} from './index.js';

const UnidadUsuario = sequelize.define('UnidadUsuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idUnidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }}, {
        timestamps: true,
        tableName: 'UnidadUsuario'
    });
    
export default UnidadUsuario;