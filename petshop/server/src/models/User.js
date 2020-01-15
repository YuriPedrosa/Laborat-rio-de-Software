const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    login:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    typeUser:{
        type: Number,
        required: true,
    }
});

mongoose.model('User', UserSchema);
