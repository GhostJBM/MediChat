import mongoose from 'mongoose';

const EventoSchema = new mongoose.Schema({
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
    tipo: {
        type: String,
        required: true
    },
    fechaInicio: {
        type: Date,
        required: true
    },
    fechaFin: {
        type: Date,
        required: true
    },
    IdUnidad: {
        type: Number,
        required: true
    },
    lugar: {
        type: String,
        required: true
    },
    vigente: {
        type: Boolean,
        required: true,
        default: true
    }});

    export const Evento = mongoose.model('Evento', EventoSchema);