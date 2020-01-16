const mongoose  = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const AnimalSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    type:{
        type: String,
        required: true,
    },
    breed:{
        type: String,
        required: true,
    },
    size:{
        type: Number,
    },
    weight:{
        type: Number,
    },
    age:{
        type: Number,
    }
});

AnimalSchema.plugin(mongoosePaginate);

mongoose.model('Animal', AnimalSchema);