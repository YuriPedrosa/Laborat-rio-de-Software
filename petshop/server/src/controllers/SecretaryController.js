const mongoose = require('mongoose');

const Secretary = mongoose.model('Secretary');

module.exports = {
    async index(req, res){
        const clients = await Secretary.find();

        return res.json(clients);
    },
    async store(req, res){
        const client = await Secretary.create(req.body);

        return res.json(client);
    },

};