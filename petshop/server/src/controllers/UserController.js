const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports = {
    async index(req, res){
        const clients = await User.find();

        return res.json(clients);
    }
};