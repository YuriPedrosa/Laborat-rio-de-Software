const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    reference:{
        type: Number,
        required: true
    },
    status:{
        type: String,
        required: true
    },
    estimate:{
        type: Number,
        required: true
    },
    diagnostic:{
        type: String,
        required: true
    },
    obs:{
        type: String,
        required: true
    },
    equipament:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Equipament'
    },
    client:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client'
    }
});

mongoose.model('Order', OrderSchema);