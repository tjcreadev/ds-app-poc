const mongoose = require('mongoose')
const Schema = mongoose.Schema

const rugsSchema = new Schema({
    _id: false,
    mat: {
        type: Number
    },
    r3x5: {
        type: Number
    },
    r4x6: {
        type: Number
    },
    r5x7: {
        type: Number
    },
    r6x8: {
        type: Number
    },
    r8x10: {
        type: Number
    },
    r10x12: {
        type: Number
    },
    r12x14: {
        type: Number
    },
    runner: {
        type: Number
    }
})