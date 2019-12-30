const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ContactSchema = new Schema({
    _id: false,
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true                
    },
    state: {
        type: String
    },
    zip: {
        type: String
    },
    county: {
        type: String
    }
})