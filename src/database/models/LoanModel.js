const mongoose = require('mongoose');
const { Schema } = mongoose;

const LoanSchema = new Schema({
    loanCode: {
        type: Number
    },
    loanDescription: {
        type: String
    },
    minPay: {
        type: String
    },
    maxPay: {
        type: String
    }
})

module.exports = mongoose.model('Loan', LoanSchema);