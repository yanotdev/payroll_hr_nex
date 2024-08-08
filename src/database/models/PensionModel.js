const mongoose = require('mongoose');
const { Schema } = mongoose;

const PensionSchema = new Schema({
    code: {
        type: Number
    },
    description: {
        type: String
    },
    employeePer: {
        type: Number
    },
    employerPer: {
        type: Number
    }
})

module.exports = mongoose.model('Pension', PensionSchema);