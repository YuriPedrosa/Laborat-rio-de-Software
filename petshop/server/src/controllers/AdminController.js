const mongoose = require('mongoose');

const Administrator = mongoose.model('Administrator');

module.exports = {
    async index(req, res){
        const clients = await Administrator.find();

        return res.json(clients);
    },
    async store(req, res){
        const client = await Administrator.create(req.body);

        return res.json(client);
    },

};