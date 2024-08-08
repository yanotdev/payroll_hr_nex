const mongoose = require('mongoose');
const { Schema } = mongoose;

const NextofKinSchema = new Schema({
    registrationId: {
        type: Number
    },
    fullName: {
        type: String,
        minlength: [1, 'Name should be at least 1 character long'],
        maxlegnth: [255, 'Name should not exceed 255 characters']
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
    relationship: {
        type: String
    },
    name: {
        type: String
    },
    contact: {
        type: String
    }
})

module.exports = mongoose.model('NextofKin', NextofKinSchema);