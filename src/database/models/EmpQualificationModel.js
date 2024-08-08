const mongoose = require('mongoose');
const { Schema } = mongoose;

const EmpQualificationSchema = new Schema({
    registrationId: {
        type: Number,
        required: [true, "Registration ID is required"]
    },
    institution: {
        type: String
    },
    educationQua: {
        type: String
    },
    year: {
        type: String
    },
    isDeleted: {
        type: Boolean
    }
})

module.exports = mongoose.model("EmpQualification", EmpQualificationSchema);