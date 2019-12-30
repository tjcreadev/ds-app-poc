const mongoose = require('mongoose')
const Schema = mongoose.Schema

const carpetSchema = new Schema({
    _id: false,
    living: {
        type: Number
    },
    family: {
        type: Number
    },
    great: {
        type: Number
    },
    dining: {
        type: Number
    },
    bedroom: {
        type: Number
    },
    masterBedroom: {
        type: Number
    },
    closetStandard: {
        type: Number
    },
    closetWalkIn: {
        type: Number
    },
    loftSmall: {
        type: Number
    },
    loftLarge: {
        type: Number
    },
    steps: {
        type: Number
    },
    landingSmall: {
        type: Number
    },
    landingLarge: {
        type: Number
    },
    hall: {
        type: Number
    },
    sunroom: {
        type: Number
    },
    bonus: {
        type: Number
    },
    kitchen: {
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
    office: {
        type: Number
    },
    entry: {
        type: Number
    },
    spot: {
        type: Number
    },
    baseBedroom: {
        type: Number
    },
    baseFamily: {
        type: Number
    },
    baseRec: {
        type: Number
    },
    baseHall: {
        type: Number
    },
    baseAdditional: {
        type: Number
    },
})