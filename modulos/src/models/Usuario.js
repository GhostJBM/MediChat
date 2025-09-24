import mongoose from 'mongoose';

const Usuario = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
        min: 1,
        max: 99999999999
    },
    nombres:{  
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    },
    contraseña: {
        type: String,
        required: true,
        min: 8
    },
    discapacidad: {
        type: String,
        required: false
    },
    vigente: {
        type: Boolean,
        required: true,
        default: true
    }});

    export const Usuarios = mongoose.model('Usuarios', Usuario);