const mongoose = require('mongoose');

const Purchase = mongoose.model('Purchase');

module.exports = {
    async index(req, res){
        const purchases = await Purchase.find();

        return res.json(purchases);
    },

    async show(req, res) {
        const purchase = await Purchase.findById(req.params.id);

        return res.json(purchase);
    },

    async store(req, res){
        const purchase = await Purchase.create(req.body);

        return res.json(purchase);
    },

    async update(req, res){
        const purchase = await Purchase.findByIdAndUpdate(req.params.id, req.body, {new : true});
        
        return res.json(purchase);
    },

    async destroy(req, res){
        await Purchase.findByIdAndRemove(req.params.id);

        return res.send();
    }
};