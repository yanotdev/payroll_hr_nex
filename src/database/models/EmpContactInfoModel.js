const mongoose = require('mongoose');
const { Schema } = mongoose;

const EmpContactInfoSchema = new Schema({
  contactId: {
    type: Number,
    required: [true, 'Contact ID is required'],
    unique: true,
    min: [0, 'Contact ID must be a positive number']
  },
  employeeId: {
    type: Number,
    required: [true, 'Employee ID is required'],
    min: [0, 'Employee ID must be a positive number']
  },
  phoneNumber: {
    type: String,
    required: [true, 'Phone number is required'],
    minlength: [1, 'Phone number must be at least 1 character long'],
    maxlength: [50, 'Phone number cannot exceed 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    minlength: [1, 'Email must be at least 1 character long'],
    maxlength: [255, 'Email cannot exceed 255 characters'],
    match: [/\S+@\S+\.\S+/, 'Email is not valid']
  },
  address: {
    type: String,
    required: [true, 'Address is required'],
    minlength: [1, 'Address must be at least 1 character long'],
    maxlength: [500, 'Address cannot exceed 500 characters']
  }
});

module.exports = mongoose.model('EmpContactInfo', EmpContactInfoSchema);
