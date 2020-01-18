const mongoose = require('mongoose');

const Reserve = mongoose.model('Reserve');

module.exports = {
    async index(req, res){
        const reserves = await Reserve.find();
        return res.json(reserves);
    },

    async show(req, res){
        const reserve = await Reserve.findById(req.params.id);

        return res.json(reserve);
    },

    async store(req, res) {
        const reserve = await Reserve.create(req.body);

        return res.json(reserve);
    },

    async update(req, res){
        const reserve = await Reserve.findByIdAndUpdate(req.params.id, req.body, {new: true});
        
        return res.json(reserve);
    },

    async destroy(req, res){
        await Reserve.findByIdAndRemove(req.params.id);

        return res.send();
    }
};