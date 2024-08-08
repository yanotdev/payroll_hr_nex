const mongoose = require('mongoose');
const { Schema } = mongoose;

const OtherAllowancesSchema = new Schema({
    code: {
        type: Number
    },
    description: {
        type: String
    }
})

module.exports = mongoose.model('OtherAllowances', OtherAllowancesSchema);