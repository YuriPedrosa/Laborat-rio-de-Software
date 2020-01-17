const mongoose = require('mongoose');

const Question = mongoose.model('Question');

module.exports = {
    async index(req, res){
        const questions = await Question.find();
        return res.json(questions);
    },

    async show(req, res){
        const question = await Question.findById(req.params.id);

        return res.json(question);
    },

    async store(req, res) {
        const question = await Question.create(req.body);

        return res.json(question);
    },

    async update(req, res){
        const question = await Question.findByIdAndUpdate(req.params.id, req.body, {new: true});
        
        return res.json(question);
    },

    async destroy(req, res){
        await Question.findByIdAndRemove(req.params.id);

        return res.send();
    }
};