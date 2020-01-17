const mongoose = require('mongoose');
const util = require('util');
const Schema = mongoose.Schema;

function BaseSchema() {
    Schema.apply(this, arguments);

    this.add({
        login: {type: String, required: true},
        password: {type: String, required: true},
        name: {type: String, required: true},
        tel: {type: String, required: true}
    });
}
util.inherits(BaseSchema, Schema);

var UserSchema = new BaseSchema();
var DoctorSchema = new BaseSchema({ crm: {type: String, required: true} });

var User = mongoose.model('User', UserSchema);
var Doctor = User.discriminator('Doctor', DoctorSchema);
new Doctor().__t;

var SecretarySchema = new Schema({ cpf: String, rg: String, address: String, gender: String });
var Secretary = User.discriminator('Secretary', SecretarySchema);
new Secretary().__t;