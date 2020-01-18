const mongoose = require('mongoose');

const Schedule = mongoose.model('Schedule');

module.exports = {
    async index(req, res){
        const schedules = await Schedule.find();
        return res.json(schedules);
    },

    async show(req, res){
        const schedule = await Schedule.findById(req.params.id);

        return res.json(schedule);
    },

    async store(req, res) {
        const schedule = await Schedule.create(req.body);

        return res.json(schedule);
    },

    async update(req, res){
        const schedule = await Schedule.findByIdAndUpdate(req.params.id, req.body, {new: true});
        
        return res.json(schedule);
    },

    async destroy(req, res){
        await Schedule.findByIdAndRemove(req.params.id);

        return res.send();
    }
};