const mongoose = require('mongoose');
const { Schema } = mongoose;

const GurrantorSchema = new Schema({
  gurrantorId: {
    type: Number,
    required: [true, 'Gurrantor ID is required'],
    unique: true,
    min: [0, 'Gurrantor ID must be a positive number']
  },
  employeeId: {
    type: Number,
    required: [true, 'Employee ID is required'],
    min: [0, 'Employee ID must be a positive number']
  },
  name: {
    type: String,
    required: [true, 'Name is required'],
    minlength: [1, 'Name must be at least 1 character long'],
    maxlength: [255, 'Name cannot exceed 255 characters']
  },
  relationship: {
    type: String,
    required: [true, 'Relationship is required'],
    minlength: [1, 'Relationship must be at least 1 character long'],
    maxlength: [255, 'Relationship cannot exceed 255 characters']
  },
  contactInfo: {
    type: String,
    required: [true, 'Contact info is required'],
    minlength: [1, 'Contact info must be at least 1 character long'],
    maxlength: [255, 'Contact info cannot exceed 255 characters']
  },
  registrationId: {
    type: Number,
    required: [true, 'Registration ID is required']
  },
  payLevel: {
    type: String
  }
});

module.exports = mongoose.model('Gurrantor', GurrantorSchema);
