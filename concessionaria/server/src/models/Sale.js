const mongoose = require('mongoose');

const SaleSchema = new mongoose.Schema({
    payment:{
        type: String,
        required: true,
    },
    aditional_service:{
        type: String,
        required: true,
    },
    discount:{
        type: Number,
    },
    total:{
        type: Number,
        required: true,
    },
    chassi:{
        type: String,
        required: true
    }
});

mongoose.model('Sale', SaleSchema);