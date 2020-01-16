const mongoose = require('mongoose');

const Employee = mongoose.model('Employee');

module.exports = {
    async index(req, res){
        const clients = await Employee.find();

        return res.json(clients);
    },
    async store(req, res){
        const client = await Employee.create(req.body);

        return res.json(client);
    },

};