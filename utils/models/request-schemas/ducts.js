const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ductsSchema = new Schema({
    _id: false,
    sqft: {
        type: Number
    },
    built: {
        type: Number
    },
    supply: {
        type: Number
    },
    return: {
        type: Number
    },
    main: {
        type: Number
    },
    furnace: {
        type: Number
    },
    highVents: {
        type: Boolean
    },
    dryerFirst: {
        type: Number
    },
    dryerSecond: {
        type: Number
    }
})