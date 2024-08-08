const mongoose = require('mongoose');
const { Schema } = mongoose;

const AllowanceSchema = new Schema({
  allowanceCode: { 
    type: Number, 
    required: [true, 'Allowance ID is required'], 
    unique: true,
    min: [0, 'Allowance ID must be a positive number']
  },
  allowanceName: { 
    type: String, 
    required: [true, 'Allowance name is required'],
    minlength: [1, 'Allowance name must be at least 1 character long'],
    maxlength: [50, 'Allowance name cannot exceed 50 characters']
  },
  allowanceType: { 
    type: String, 
    required: [true, 'Allowance type is required'],
    enum: ['Basic', 'Housing', 'Transport', 'Lunch', 'Others', 'Utility', 'Other'], // Add more types if necessary
    maxlength: [50, 'Allowance type cannot exceed 50 characters']
  },
  percentage: { 
    type: Number, 
    required: [true, 'Percentage is required'],
    min: [0, 'Percentage must be a positive number'],
    max: [1000, 'Percentage cannot exceed 1000']
  },
  isTaxable: { 
    type: Boolean, 
    required: [true, 'Taxable status is required']
  },
  paymentFrequency: { 
    type: String, 
    required: [true, 'Payment frequency is required'],
    enum: ALLOWANCE_PAYMENT_FREQUENCY,
    maxlength: [20, 'Payment frequency cannot exceed 20 characters']
  },
  sortOrder: { 
    type: Number, 
    required: [true, 'Sort order is required'],
    min: [1, 'Sort order must be at least 1']
  }
},
{
    timestamps: true,
    toJSON: true
}
);

module.exports = mongoose.model('Allowance', AllowanceSchema);
