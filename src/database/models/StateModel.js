const mongoose = require('mongoose');
const { Schema } = mongoose;

const stateSchema = new Schema({
    name: String,
    country: String,
}, {
    timestamps: true
});

module.exports = mongoose.model("State", stateSchema);