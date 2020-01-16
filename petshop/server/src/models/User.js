const mongoose = require('mongoose');
const util = require('util');
const Schema = mongoose.Schema;
const ObjectId = { type: Schema.Types.ObjectId, ref: 'Boss'};

function BaseSchema() {
    Schema.apply(this, arguments);

    this.add({
        name: String
    });
}
util.inherits(BaseSchema, Schema);

var PersonSchema = new BaseSchema();
var BossSchema = new BaseSchema({ department: String });

var Person = mongoose.model('Person', PersonSchema);
var Boss = Person.discriminator('Boss', BossSchema);
new Boss().__t; // "Boss". `__t` is the default `discriminatorKey`

var employeeSchema = new Schema({ boss: ObjectId });
var Employee = Person.discriminator('Employee', employeeSchema, 'staff');
new Employee().__t; // "staff" because of 3rd argument above