const mongoose = require('mongoose');

const Secretary = mongoose.model('Secretary');

module.exports = {
    async index(req, res){
        const secretaries = await Secretary.find();

        return res.json(secretaries);
    },

    async show(req, res) {
        const secretary = await Secretary.findById(req.params.id);

        return res.json(secretary);
    },

    async store(req, res){
        const secretary = await Secretary.create(req.body);

        return res.json(secretary);
    },

    async update(req, res){
        const secretary = await Secretary.findByIdAndUpdate(req.params.id, req.body, {new : true});
        
        return res.json(secretary);
    },

    async destroy(req, res){
        await Secretary.findByIdAndRemove(req.params.id);

        return res.send();
    }
};