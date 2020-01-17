const mongoose = require('mongoose');
const util = require('util');
const Schema = mongoose.Schema;

function BaseSchema() {
    Schema.apply(this, arguments);

    this.add({
        login: {type: String, required: true},
        password: {type: String, required: true},
    });
}
util.inherits(BaseSchema, Schema);

var UserSchema = new BaseSchema();
var AdminSchema = new BaseSchema({ extraPassword: {type: String, required: true}});

var User = mongoose.model('User', UserSchema);
var Administrator = User.discriminator('Administrator', AdminSchema);
new Administrator().__t;

var SecretarySchema = new Schema({ name: String, email: String,
     cpf: String, tel: String, rg: String });
var Secretary = User.discriminator('Secretary', SecretarySchema);
new Secretary().__t;

var ClientSchema = new Schema({ name: String, email: String,
    cpf: String, tel: String, address: String });
var Client = User.discriminator('Client', ClientSchema);
new Client().__t;