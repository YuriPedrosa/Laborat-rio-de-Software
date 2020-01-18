const mongoose = require('mongoose');

const Vehicle = mongoose.model('Vehicle');

module.exports = {
    async index(req, res){
        const vehicles = await Vehicle.find();

        return res.json(vehicles);
    },

    async show(req, res){
        const vehicle = await Vehicle.findById(req.params.id);

        return res.json(vehicle);
    },

    async store(req, res) {
        const vehicle = await Vehicle.create(req.body);

        return res.json(vehicle);
    },

    async update(req, res){
        const vehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body, {new: true});
        
        return res.json(vehicle);
    },

    async destroy(req, res){
        await Vehicle.findByIdAndRemove(req.params.id);

        return res.send();
    }
};