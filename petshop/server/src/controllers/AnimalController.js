const mongoose = require('mongoose');

const Animal = mongoose.model('Animal');

module.exports = {
    async index(req, res){
        const { page = 1 } = req.query;
        const animals = await Animal.paginate({}, { page , limit: 10});
        
        return res.json(animals);
    },

    async show(req, res){
        const animals = await Animal.findById(req.params.id);
        
        return res.json(animals);
    },

    async store(req, res){
        const animal = await Animal.create(req.body);

        return res.json(animal);
    },

    async update(req, res){
        const animal = await Animal.findByIdAndUpdate(req.params.id);

        return res.json(animal);
    },

    async destroy(req, res){
        await Animal.findByIdAndRemove(req.params.id);

        return res.send();
    }
};