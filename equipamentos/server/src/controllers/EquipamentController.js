const mongoose = require('mongoose');

const Equipament = mongoose.model('Equipament');

module.exports = {
    async index(req, res){
        const equipaments = await Equipament.find();

        return res.json(equipaments);
    },

    async show(req, res){
        const equipament = await Equipament.findById(req.params.id);

        return res.json(equipament);
    },

    async store(req, res) {
        const equipament = await Equipament.create(req.body);

        return res.json(equipament);
    },

    async update(req, res){
        const equipament = await Equipament.findByIdAndUpdate(req.params.id, req.body, {new: true});
        
        return res.json(equipament);
    },

    async destroy(req, res){
        await Equipament.findByIdAndRemove(req.params.id);

        return res.send();
    }
};