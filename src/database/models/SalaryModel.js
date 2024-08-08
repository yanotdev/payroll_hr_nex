const { number } = require('joi');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const SalarySchema = new Schema({
    staffNo: {
        type: String
    },
    staffName: {
        type: String,
        minlength: [1, 'Name must be at least 1 character long'],
        maxlength: [255, 'Name should not exceed 255 characters']
    },
    period: {
        type: String
    },
    basicDescription: {
        type: String
    },
    basicType: {
        type: String
    },
    basicPer: {
        type: Number
    },
    housingDescription: {
        type: String
    },
    housingType: {
        type: String
    },
    housingPer: {
        type: Number
    },
    transportDescription: {
        type: String
    },
    transportType: {
        type: String
    },
    transportPer: {
        type: Number
    },
    utilityDescription: {
        type: String
    },
    utilityType: {
        type: String
    },
    utilityPer: {
        type: Number
    },
    lunchDescription: {
        type: String
    },
    lunchType: {
        type: String
    },
    lunchPer: {
        type: Number
    },
    otherDescription: {
        type: String
    },
    otherType: {
        type: String
    },
    otherPer: {
        type: Number
    },
    basicAmt: {
        type: Number
    },
    housingAmt:{
        type: Number
    },
    utilityAmt: {
        type: Number
    },
    lunchAmt: {
        type: Number
    },
    otherAmt: {
        type: Number
    },
    amount: {
        type: Number
    }
})

module.exports = mongoose.model('Salary', SalarySchema);