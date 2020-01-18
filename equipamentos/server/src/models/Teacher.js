const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    class:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class'
    }, 
    subject:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject'
    }
});

mongoose.model('Teacher', TeacherSchema);