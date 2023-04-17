const mongoose = require('./dbconfig');
const Schema = mongoose.Schema;
const userloginschema = new Schema(
    {   
        email: { type: String, require: true , maxlength: 250, unique: true},
        password: {type: String, require: true,}
    }
);
module.exports = mongoose.model('userlogin', userloginschema, "userlogin");