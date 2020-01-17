const mongoose = require('mongoose');

const HealthInsuranceSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    tel:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    cnpj:{
        type: String,
        required: true
    },
    plans:{
        type: String,
        required: true
    }
});

mongoose.model('HealthInsurance', HealthInsuranceSchema);