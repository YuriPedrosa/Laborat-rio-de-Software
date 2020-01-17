const mongoose = require('mongoose');

const SubjectSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    }
});

mongoose.model('Subject', SubjectSchema);