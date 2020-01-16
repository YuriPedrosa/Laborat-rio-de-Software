const mongoose = require('mongoose');

const Boss = mongoose.model('Boss');

module.exports = {
    async index(req, res){
        const clients = await Boss.find();

        return res.json(clients);
    },
    async store(req, res){
        const client = await Boss.create(req.body);

        return res.json(client);
    },

};