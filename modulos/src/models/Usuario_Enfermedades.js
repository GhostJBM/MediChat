import mongoose from 'mongoose';

const UsuarioEnfermedadesSchema = new mongoose.Schema({
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
    idEnfermedad: {
        type: Number,
        required: true
    },
    fechaConsulta: {
        type: Date,
        required: true
    },
    vigente: {
        type: Boolean,
        required: true,
        default: true
    }});

    export const UsuarioEnfermedades = mongoose.model('UsuarioEnfermedades', UsuarioEnfermedadesSchema);