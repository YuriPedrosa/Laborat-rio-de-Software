const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema({
    model:{
        type: String, 
        required: true
    },
    color:{
        type: String, 
        required: true
    },
    ano:{
        type: Number,
        required: true
    },
    preco:{
        type: Number,
        required: true
    },
    chassis:{
        type: String, 
        required: true
    },
    producer:{
        type: String, 
        required: true
    }
});

mongoose.model('Vehicle', VehicleSchema);