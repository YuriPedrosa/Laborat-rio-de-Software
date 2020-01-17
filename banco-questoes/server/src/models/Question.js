const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    statement:{
        type: String,
        required: true
    },
    answers:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Answer'
    }]
});

mongoose.model('Question', QuestionSchema);