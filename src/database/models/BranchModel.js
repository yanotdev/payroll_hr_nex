const mongoose = require('mongoose');
const { Schema } = mongoose;
const Joi = require('joi');

const BranchSchema = new Schema({
  branchCode: {
    type: Number,
    required: [true, 'Branch ID is required'],
    unique: true,
    min: [0, 'Branch ID must be a positive number']
  },
  branchName: {
    type: String,
    required: [true, 'Branch name is required'],
    minlength: [1, 'Branch name must be at least 1 character long'],
    maxlength: [255, 'Branch name cannot exceed 255 characters']
  },
  address: {
    type: String,
    required: [true, 'Location is required'],
    minlength: [1, 'Location must be at least 1 character long'],
    maxlength: [255, 'Location cannot exceed 255 characters']
  },
  phone: {
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
  isDeleted: {
    type: Boolean,
    default: false
  }
},{
    timestamps: true
});

module.exports = mongoose.model('Branch', BranchSchema);