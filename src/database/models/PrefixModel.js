const mongoose = require('mongoose');
const { Schema } = mongoose;

const PrefixSchema = new Schema({
    prefix: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('Prefix', PrefixSchema);