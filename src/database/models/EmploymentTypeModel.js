const { required } = require('joi');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const EmployeeTypeSchema = new Schema({
    employeeType: {
        type: String
    },
    employeeTypeCode: {
        type: Number
    },
    employeeTypeName: {
        type: String,
        required: [true, "Name is required"]
    }
})

module.exports = mongoose.model("EmployeeType", EmployeeTypeSchema);