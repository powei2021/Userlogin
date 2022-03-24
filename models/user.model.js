const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname: {
        type: String,
        trim: true,
        required: true
    },
    lastname:{
        type: String,
        trim: true,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    phone: Number,
    email: {
        type: String,
        trim: true,
        required: true
    },
    address: String ,
    password: {
        type: String,
        trim: true,
        required: true
    }
},{
    timestamps:true
});

module.exports = mongoose.model('user', userSchema);