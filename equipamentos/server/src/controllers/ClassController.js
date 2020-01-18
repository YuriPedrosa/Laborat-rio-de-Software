const mongoose = require('mongoose');

const Class = mongoose.model('Class');

module.exports = {
    async index(req, res){
        const cls = await Class.find();
        return res.json(cls);
    },

    async show(req, res){
        const cl = await Class.findById(req.params.id);

        return res.json(cl);
    },

    async store(req, res) {
        const cl = await Class.create(req.body);

        return res.json(cl);
    },

    async update(req, res){
        const cl = await Class.findByIdAndUpdate(req.params.id, req.body, {new: true});
        
        return res.json(cl);
    },

    async destroy(req, res){
        await Class.findByIdAndRemove(req.params.id);

        return res.send();
    }
};