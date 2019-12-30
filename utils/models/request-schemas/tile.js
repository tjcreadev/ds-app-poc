const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tileSchema = new Schema({
    _id: false,
    kitchenEatIn: {
        type: Number
    },
    kitchen: {
        type: Number
    },
    dining: {
        type: Number
    },
    entry: {
        type: Number
    },
    bathMaster: {
        type: Number
    },
    bathFull: {
        type: Number
    },
    bathHalf: {
        type: Number
    },
    hall: {
        type: Number
    },
    utility: {
        type: Number
    },
    other: {
        type: Number
    }
})