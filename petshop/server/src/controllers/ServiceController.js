const mongoose = require('mongoose');

const Service = mongoose.model('Service');

module.exports = {
    async index(req, res){
        const { page = 1 } = req.query;
        const services = await Service.paginate({}, { page , limit: 10});
        
        return res.json(services);
    },

    async show(req, res){
        const services = await Service.findById(req.params.id);
        
        return res.json(services);
    },

    async store(req, res){
        const service = await Service.create(req.body);

        return res.json(service);
    },

    async update(req, res){
        const service = await Service.findByIdAndUpdate(req.params.id);

        return res.json(service);
    },

    async destroy(req, res){
        await Service.findByIdAndRemove(req.params.id);

        return res.send();
    }
};