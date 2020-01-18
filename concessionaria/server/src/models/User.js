const mongoose = require('mongoose');
const util = require('util');
const Schema = mongoose.Schema;

function BaseSchema() {
    Schema.apply(this, arguments);

    this.add({
        name: {type: String, required: true},
        email: {type: String},
        cpf: {type: String, required: true},
        tel: {type: String, required: true},
        rg: {type: String},
        address: {type: String},
        login: {type: String, required: true},
        password: {type: String, required: true},
    });
}
util.inherits(BaseSchema, Schema);

var UserSchema = new BaseSchema();
var ManagerSchema = new BaseSchema({ extraPassword: {type: String, required: true} });

var User = mongoose.model('User', UserSchema);
var Manager = User.discriminator('Manager', ManagerSchema);
new Manager().__t;

var EmployeeSchema = new Schema({ pis: {type: Number, required: true } });
var Employee = User.discriminator('Employee', EmployeeSchema);
new Employee().__t;
