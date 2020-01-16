const mongoose = require('mongoose');

const Administrator = mongoose.model('Administrator');

module.exports = {
    async index(req, res){
        const admins = await Administrator.find();

        return res.json(admins);
    },

    async show(req, res) {
        const admin = await Administrator.findById(req.params.id);

        return res.json(admin);
    },

    async store(req, res){
        const admin = await Administrator.create(req.body);

        return res.json(admin);
    },

    async update(req, res){
        const admin = await Administrator.findByIdAndUpdate(req.params.id, req.body, {new : true});
        
        return res.json(admin);
    },

    async destroy(req, res){
        await Administrator.findByIdAndRemove(req.params.id);

        return res.send();
    }
};