import mongoose from 'mongoose';

const UnidadUsuarioSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
        min: 1,
        max: 99999999999
    },
    idUsuario:{
        type: Number,
        required: true
    },
    idUnidad: {
        type: Number,
        required: true
    },
    vigente: {
        type: Boolean,
        required: true,
        default: true
    }});   

    export const UnidadUsuario = mongoose.model('UnidadUsuario', UnidadUsuarioSchema);