const mongoose = require('mongoose');

const Person = mongoose.model('Person');

module.exports = {
    async index(req, res){
        const clients = await Person.find();

        return res.json(clients);
    },
    async store(req, res){
        const client = await Person.create(req.body);

        return res.json(client);
    },

};