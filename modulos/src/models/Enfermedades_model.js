import mongoose from 'mongoose';

const EnfermedadSchema = new mongoose.Schema({
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
    descripcion: {
        type: String,
        required: true
    },
    recomedaciones: {
        type: String,
        required: true
    },
    vigente: {
        type: Boolean,
        required: true,
        default: true
    }});

    export const Enfermedad = mongoose.model('Enfermedad', EnfermedadSchema);