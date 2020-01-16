const mongoose = require('mongoose');

// Base User
var user = {
    login:{ type: String, required: true},
    password:{ type: String, required: true}
}

// Schema Administrator
var admin = Object.create(user);
admin.extraPassword = {type: String, required: true};

// Schema Client
var client = Object.create(user);
client.name = {type: String, required: true};
client.email = {type: String, required: true};
client.cpf = {type: String, required: true};
client.telphone = {type: String, required: true};
client.andress = {type: String, required: true};
client.typeUser = {type: Number, default: 1};

// Schema Secretary
var secretary = Object.create(user);
secretary.name = {type: String, required: true};
secretary.email = {type: String, required: true};
secretary.cpf = {type: String, required: true};
secretary.rg = {type: String, required: true};
secretary.telphone = {type: String, required: true};
secretary.typeUser = {type: Number, default: 2};

const AdministratorSchema = new mongoose.Schema(admin);
mongoose.model('Administrator', AdministratorSchema, 'User');

const ClientSchema = new mongoose.Schema(client);
mongoose.model('Client', ClientSchema, 'User');

const SecretarySchema = new mongoose.Schema(secretary);
mongoose.model('Secretary', SecretarySchema, 'User');