const mongoose = require('mongoose');

const PurchaseSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    animal:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Animal',
    },
    services:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
    }],
    discount:{
        type: Number,
    },
    total:{
        type: Number,
        required: true,
    },
    payment:{
        type: String,
        required: true,
    }
});

mongoose.model('Purchase', PurchaseSchema);