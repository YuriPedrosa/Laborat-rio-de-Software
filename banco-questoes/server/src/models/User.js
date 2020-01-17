const mongoose = require('mongoose');
const util = require('util');
const Schema = mongoose.Schema;

function BaseSchema() {
    Schema.apply(this, arguments);

    this.add({
        email: {type: String, required: true},
        password: {type: String, required: true},
    });
}
util.inherits(BaseSchema, Schema);

var UserSchema = new BaseSchema();
var AdminSchema = new BaseSchema();

var User = mongoose.model('User', UserSchema);
var Administrator = User.discriminator('Administrator', AdminSchema);
new Administrator().__t;

var TeacherSchema = new Schema();
var Teacher = User.discriminator('Teacher', TeacherSchema);
new Teacher().__t;