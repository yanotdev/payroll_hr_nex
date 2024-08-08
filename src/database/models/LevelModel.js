const mongoose = require('mongoose');
const { Schema } = mongoose;

const LevelSchema = new Schema({
    levelCode: {
        type: Number
    },
    levelDescription: {
        type: String
    }
})

module.exports = mongoose.model('Level', LevelSchema);