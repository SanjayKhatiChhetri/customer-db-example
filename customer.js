const mongoose = require('./dbconfig');

const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const customerschema = new Schema(
    {   _id: Number,
        name: { type: String, required: true, maxlength: 250 },
        firstname: { type: String, required: true, maxlength: 250 },
        lastname: { type: String, required: true , maxlength: 250},
        email: { type: String, require: true , maxlength: 250},
        phone: {type: String, require: true , maxlength: 250},
    },
    {_id: false}
);
customerschema.plugin(AutoIncrement);
module.exports = mongoose.model('customer', customerschema, "customer");