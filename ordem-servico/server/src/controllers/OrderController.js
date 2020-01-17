const mongoose = require('mongoose');

const Order = mongoose.model('Order');

module.exports = {
    async index(req, res){
        const orders = await Order.find();

        return res.json(orders);
    },

    async show(req, res){
        const order = await Order.findById(req.params.id);

        return res.json(order);
    },

    async store(req, res) {
        const order = await Order.create(req.body);

        return res.json(order);
    },

    async update(req, res){
        const order = await Order.findByIdAndUpdate(req.params.id, req.body, {new: true});
        
        return res.json(order);
    },

    async destroy(req, res){
        await Order.findByIdAndRemove(req.params.id);

        return res.send();
    }
};