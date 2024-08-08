const { number } = require('joi');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const PayrollSchema = new Schema({
    staffId: {
        type: String
    },
    staffName: {
        type: String
    },
    designation: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Designation'
    },
    department: {
        type: String
    },
    grossPayWithoutAllowance: {
        type: Number
    },
    basic: {
        type: Number
    },
    housingAllowance: {
        type: Number
    },
    transportAllowance: {
        type: Number
    },
    lunchAllowance: {
        type: Number
    },
    otherAllowance: {
        type: Number
    },
    grossPay: {
        type:Number
    },
    pension: {
        type: Number
    },
    payeeTax: {
        type: Number
    },
    otherDeduction: {
        type: Number
    },
    pensionAvcDeduction: {
        type: Number
    },
    totalDeduction: {
        type: Number
    },
    net: {
        type: Number
    },
    remarks: {
        type: String
    },
    month: {
        type: String
    }
})

module.exports = mongoose.model('Payroll', PayrollSchema);