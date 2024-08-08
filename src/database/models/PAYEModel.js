const mongoose = require('mongoose');
const { validate } = require('./AllowanceModel');
const { Schema } = mongoose;

const PayeSchema = new Schema({
    staffId: {
        type: String
    },
    staffName: {
        type: String
    },
    payPeriod: {
        type: String
    },
    grossSalary: {
        type: Number
    },
    basic: {
        type: Number
    },
    housing: {
        type: Number
    },
    utility: {
        type: Number
    },
    transport: {
        type: Number
    },
    others: {
        type: Number
    },
    lunch: {
        type: Number
    },
    loanDeduct: {
        type: Number
    },
    penaltyDeduct: {
        type: Number
    },
    pension: {
        type: Number
    },
    nationalHFC: {
        type: Number
    },
    consolidatedR: {
        type: Number
    },
    tDeduction: {
        type: Number
    },
    tNonTDeduction: {
        type: Number
    },
    netTIncome: {
        type: Number
    },
    calPayE: {
        type: Number
    },
    netSalary: {
        type: Number
    },
    date: {
        type: Date,
        validate: ()=>{
            return new Date() - new Date(this.date) < 0;
        }
    }
})

module.exports = mongoose.model('PAYEModels', PayeSchema);