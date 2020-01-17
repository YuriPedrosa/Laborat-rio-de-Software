const mongoose = require('mongoose');

const TestSchema = new mongoose.Schema({
    questions:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    }]
});

mongoose.model('Test', TestSchema);