const mongoose = require('mongoose');
const { Schema } = mongoose;

const PenaltySchema = new Schema({
    code: {
        type: Number
    },
    description: {
        type: String
    },
    deductType: {
        type: String
    },
    percentage: {
        type: Number
    }
})

module.exports = mongoose.model('Penalty', PenaltySchema);