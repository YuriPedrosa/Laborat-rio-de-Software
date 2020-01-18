const mongoose = require('mongoose');

const ReserveSchema = new mongoose.Schema({
    schedule:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Schedule'
    },
    teacher:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher'
    },
    equipament:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Equipament'
    },
    class:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class'
    }
});

mongoose.model('Reserve', ReserveSchema);