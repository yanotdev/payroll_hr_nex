const mongoose = require('mongoose');
const { Schema } = mongoose;

const MedicalSchema = new Schema({
    registrationId: {
        type: Number
    },
    group: {
        type: String
    },
    genotype: {
        type: String
    },
    weight: {
        type: String
    },
    height: {
        type: String
    },
    smoke: {
        type: String
    },
    drink: {
        type: String
    },
    allergies: {
        type: String
    },
    medHistory: {
        type: String
    },
    comments: {
        type: String
    }
})

module.exports = mongoose.model('Medical', MedicalSchema);