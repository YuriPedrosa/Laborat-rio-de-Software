const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ServiceSchema = new mongoose.Schema({
    indicacao:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Animal',
    },
    preco:{
        type: Number,
        required: true,
    },
    disponibilidade:{
        type: String,
        required: true,
    },
    desconto:{
        type: Number,
    }
});

ServiceSchema.plugin(mongoosePaginate);

mongoose.model('Service', ServiceSchema);