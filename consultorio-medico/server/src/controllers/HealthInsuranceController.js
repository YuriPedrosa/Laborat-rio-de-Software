const mongoose = require('mongoose');

const HealthInsurance =  mongoose.model('HealthInsurance');

module.exports = {
    async index(req, res){
        const healthInsurances = await HealthInsurance.find();

        return res.json(healthInsurances);
    },

    async show(req, res){
        const healthInsurance = await HealthInsurance.findById(req.params.id);

        return res.json(healthInsurance);
    },

    async store(req, res) {
        const healthInsurance = await HealthInsurance.create(req.body);

        return res.json(healthInsurance);
    },

    async update(req, res){
        const healthInsurance = await HealthInsurance.findByIdAndUpdate(req.params.id, req.body, {new: true});
        
        return res.json(healthInsurance);
    },

    async destroy(req, res){
        await HealthInsurance.findByIdAndRemove(req.params.id);

        return res.send();
    }
}