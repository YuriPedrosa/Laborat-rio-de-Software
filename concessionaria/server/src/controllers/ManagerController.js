const mongoose = require('mongoose');

const Manager = mongoose.model('Manager');

module.exports = {
    async index(req, res){
        const managers = await Manager.find();

        return res.json(managers);
    },

    async show(req, res){
        const manager = await Manager.findById(req.params.id);

        return res.json(manager);
    },

    async store(req, res) {
        const manager = await Manager.create(req.body);

        return res.json(manager);
    },

    async update(req, res){
        const manager = await Manager.findByIdAndUpdate(req.params.id, req.body, {new: true});
        
        return res.json(manager);
    },

    async destroy(req, res){
        await Manager.findByIdAndRemove(req.params.id);

        return res.send();
    }
};