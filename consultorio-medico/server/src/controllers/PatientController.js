const mongoose = require('mongoose');

const Patient =  mongoose.model('Patient');

module.exports = {
    async index(req, res){
        const patients = await Patient.find();

        return res.json(patients);
    },

    async show(req, res){
        const patient = await Patient.findById(req.params.id);

        return res.json(patient);
    },

    async store(req, res) {
        const patient = await Patient.create(req.body);

        return res.json(patient);
    },

    async update(req, res){
        const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, {new: true});
        
        return res.json(patient);
    },

    async destroy(req, res){
        await Patient.findByIdAndRemove(req.params.id);

        return res.send();
    }
}