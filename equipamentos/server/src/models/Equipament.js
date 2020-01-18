const mongoose = require('mongoose');

const EquipamentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    brand:{
        type: String,
        required: true
    },
    model:{
        type: String,
        required: true
    },
    color:{
        type: String,
        required: true
    }
});

mongoose.model('Equipament', EquipamentSchema);