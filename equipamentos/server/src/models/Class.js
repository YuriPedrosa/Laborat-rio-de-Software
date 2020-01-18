const mongoose = require('mongoose');

const ClassSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    }
});

mongoose.model('Class', ClassSchema);