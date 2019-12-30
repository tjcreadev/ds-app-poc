const mongoose = require('mongoose')
const validator = require('validator')
// SCHEMA REQUIRES:
const AddressSchema = require('./request-schemas/address')
const carpetSchema = require('./request-schemas/carpet')
const rugsSchema = require('./request-schemas/rugs')
const upholsterySchema = require('./request-schemas/upholstery')
const tileSchema = require('./request-schemas/tile')
const ductsSchema = require('./request-schemas/ducts')

// Create "Request" model
const Request = mongoose.model('Request', {
    completed: {
        type: Boolean,
        // default: false
    },
    timestamp: {
        type: Date,
        // required: true
    },
    contact: {
        firstName: {
            type: String,
            // required: true
        },
        lastName: {
            type: String,
            // required: true
        },
        phone: {
            type: String,
            // required: true
        },
        email: {
            type: String,
            // required: true
        },
        address: AddressSchema
    },
    serviceAddress: AddressSchema,
    heard: {
        how: {
            type: String
        },
        more: {
            type: String
        }
    }, // end heard
    discount: {
        apply: {
            type: Boolean,
            default: false
        },
        type: {
            type: String
        }
    }, // end discount
    fees: {
        trip: {
            type: Boolean,
            default: false
        },
        soil: {
            type: Boolean,
            default: false
        }
    }, // end fees
    services: {
        carpet: carpetSchema,
        rugs: rugsSchema,
        tile: tileSchema,
        upholstery: upholsterySchema,
        ducts: ductsSchema
    } // end services
})


module.exports = Request