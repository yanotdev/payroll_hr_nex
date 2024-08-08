const mongoose = require('mongoose');
const { Schema } = mongoose;

const StaffAVCSchema = new Schema({
    staffId: {
        type: String
    },
    avc: {
        type: String
    }
})

module.exports = mongoose.model('StaffAVC', StaffAVCSchema);