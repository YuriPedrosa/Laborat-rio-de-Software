const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    tel:{
        type: String,
        required: true
    },
    cpf:{
        type: String,
        required: true
    },
    rg:{
        type: String,   
    },
    address:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    }
});

mongoose.model('Patient', PatientSchema);