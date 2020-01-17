const mongoose = require('mongoose');

const Test = mongoose.model('Test');

module.exports = {
    async index(req, res){
        const tests = await Test.find();
        return res.json(tests);
    },

    async show(req, res){
        const test = await Test.findById(req.params.id);

        return res.json(test);
    },

    async store(req, res) {
        const test = await Test.create(req.body);

        return res.json(test);
    },

    async update(req, res){
        const test = await Test.findByIdAndUpdate(req.params.id, req.body, {new: true});
        
        return res.json(test);
    },

    async destroy(req, res){
        await Test.findByIdAndRemove(req.params.id);

        return res.send();
    }
};