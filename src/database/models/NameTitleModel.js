const mongoose = require('mongoose');
const { Schema } = mongoose;

const nameTitleSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("NameTitle", stateSchema);