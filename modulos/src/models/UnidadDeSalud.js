import mongoose from 'mongoose';

const UnidadDeSaludSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
        min: 1,
        max: 99999999999
    },
    nombre:{
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    telefono: {
        type: Number,
        required: true,
        min: 8,
        max: 8
    },
    tipo: {
        type: String,
        required: true
    },
    latitud: {
        type: Number,
        required: true,
        min: -90,
        max: 90
    },
    longitud: {
        type: Number,
        required: true,
        min: -180,
        max: 180
    },
    vigente: {
        type: Boolean,
        required: true,
        default: true
    }});   

    export const UnidadDeSalud = mongoose.model('UnidadDeSalud', UnidadDeSaludSchema);