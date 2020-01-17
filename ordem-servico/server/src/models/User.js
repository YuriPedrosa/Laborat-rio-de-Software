const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    cpf:{
        type: String,
        required: true
    },
});

mongoose.model('User', UserSchema);