const mongoose = require('mongoose');

const Answer = mongoose.model('Answer');

module.exports = {
    async index(req, res){
        const answers = await Answer.find();
        return res.json(answers);
    },
    
    async show(req, res){
        const answer = await Answer.findById(req.params.id);

        return res.json(answer);
    },

    async store(req, res) {
        const answer = await Answer.create(req.body);

        return res.json(answer);
    },

    async update(req, res){
        const answer = await Answer.findByIdAndUpdate(req.params.id, req.body, {new: true});
        
        return res.json(answer);
    },

    async destroy(req, res){
        await Answer.findByIdAndRemove(req.params.id);

        return res.send();
    }
};