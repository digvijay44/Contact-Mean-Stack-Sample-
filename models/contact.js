const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    first_name:{
        type: String,
        require: false
    },
    last_name:{
        type: String,
        require: true
    },
    phone:{
        type: String,
        require: true
    }
});

const Contact = module.exports = mongoose.model('Contact', contactSchema);