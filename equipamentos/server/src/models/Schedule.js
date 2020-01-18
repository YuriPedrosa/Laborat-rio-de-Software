const mongoose = require('mongoose');

const ScheduleSchema = new mongoose.Schema({
    number:{
        type: Date,
        default: Date.now
    },
    desc:{
        type: Number
    }
});

mongoose.model('Schedule', ScheduleSchema);