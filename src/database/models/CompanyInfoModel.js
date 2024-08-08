const mongoose = require('mongoose');
const Joi = require("joi")
const { Schema } = mongoose;

const CompanyInfoSchema = new Schema({
  companyId: {
    type: Number,
    required: [true, 'Company ID is required'],
    unique: true,
    min: [0, 'Company ID must be a positive number']
  },
  companyName: {
    type: String,
    required: [true, 'Company name is required'],
    minlength: [1, 'Company name must be at least 1 character long'],
    maxlength: [255, 'Company name cannot exceed 255 characters']
  },
  address: {
    type: String,
    required: [true, 'Address is required'],
    minlength: [1, 'Address must be at least 1 character long'],
    maxlength: [500, 'Address cannot exceed 500 characters']
  },
  contactNumber: {
    type: String,
    required: [true, 'Contact number is required'],
    minlength: [1, 'Contact number must be at least 1 character long'],
    maxlength: [50, 'Contact number cannot exceed 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    minlength: [1, 'Email must be at least 1 character long'],
    maxlength: [255, 'Email cannot exceed 255 characters'],
    validate: {
        validator: Joi.string().email(),
        message: 'Invalid email address'
      }
  },
});

module.exports = mongoose.model('CompanyInfo', CompanyInfoSchema);
