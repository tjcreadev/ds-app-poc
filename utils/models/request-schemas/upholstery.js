const mongoose = require('mongoose')
const Schema = mongoose.Schema

const upholsterySchema = new Schema({
    _id: false,
    sofa: {
        type: Number
    },
    loveseat: {
        type: Number
    },
    sectional: {
        type: Number
    },
    recliner: {
        type: Number
    },
    chairStandard: {
        type: Number
    },
    chairStuffed: {
        type: Number
    },
    chaise: {
        type: Number
    },
    ottoman: {
        type: Number
    },
    chairDiningSeat: {
        type: Number
    },
    chairDiningSeatBack: {
        type: Number
    }
})