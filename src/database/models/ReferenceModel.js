const mongoose = require('mongoose');
const { Schema } = mongoose;

const ReferenceSchema = new Schema({
    registrationId: {
        type: Number
    },
    fullName: {
        type: String
    },
    phoneNo: {
        type: String
    },
    address: {
        type: String
    },
    country: {
        type: String
    },
    state: {
        type: String
    },
    jobPosition: {
        type: String
    }
})

module.exports = mongoose.model('Reference', ReferenceSchema);