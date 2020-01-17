const mongoose = require('mongoose');

const Teacher = mongoose.model('Teacher');

module.exports = {
    async index(req, res){
        const teachers = await Teacher.find();
        return res.json(teachers);
    },

    async show(req, res){
        const teacher = await Teacher.findById(req.params.id);

        return res.json(teacher);
    },

    async store(req, res) {
        const teacher = await Teacher.create(req.body);

        return res.json(teacher);
    },

    async update(req, res){
        const teacher = await Teacher.findByIdAndUpdate(req.params.id, req.body, {new: true});
        
        return res.json(teacher);
    },

    async destroy(req, res){
        await Teacher.findByIdAndRemove(req.params.id);

        return res.send();
    }
};