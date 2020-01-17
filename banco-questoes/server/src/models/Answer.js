const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
    answers: [{
        type: String,
        required: true
    }],
    correct:{
        type: String,
        required: true
    }
});

mongoose.model('Answer', AnswerSchema);