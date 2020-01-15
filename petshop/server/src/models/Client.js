const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    cpf: {
        type: String,
        required: true,
    },
    telefone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    }
});

mongoose.model('Client', ClientSchema);