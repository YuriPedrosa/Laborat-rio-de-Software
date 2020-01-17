const mongoose = require('mongoose');

const Doctor =  mongoose.model('Doctor');

module.exports = {
    async index(req, res){
        const doctors = await Doctor.find();

        return res.json(doctors);
    },

    async show(req, res){
        const doctor = await Doctor.findById(req.params.id);

        return res.json(doctor);
    },

    async store(req, res) {
        const doctor = await Doctor.create(req.body);

        return res.json(doctor);
    },

    async update(req, res){
        const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, {new: true});
        
        return res.json(doctor);
    },

    async destroy(req, res){
        await Doctor.findByIdAndRemove(req.params.id);

        return res.send();
    }
}