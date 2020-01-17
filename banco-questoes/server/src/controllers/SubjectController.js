const mongoose = require('mongoose');

const Subject = mongoose.model('Subject');

module.exports = {
    async index(req, res){
        const subjects = await Subject.find();
        return res.json(subjects);
    },

    async show(req, res){
        const subject = await Subject.findById(req.params.id);

        return res.json(subject);
    },

    async store(req, res) {
        const subject = await Subject.create(req.body);

        return res.json(subject);
    },

    async update(req, res){
        const subject = await Subject.findByIdAndUpdate(req.params.id, req.body, {new: true});
        
        return res.json(subject);
    },

    async destroy(req, res){
        await Subject.findByIdAndRemove(req.params.id);

        return res.send();
    }
};