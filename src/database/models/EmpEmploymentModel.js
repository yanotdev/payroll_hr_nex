const mongoose = require('mongoose');
const { Schema } = mongoose;

const EmpEmploymentSchema = new Schema({
  employmentId: {
    type: Number,
    required: [true, 'Employment ID is required'],
    unique: true,
    min: [0, 'Employment ID must be a positive number']
  },
  employeeId: {
    type: Number,
    required: [true, 'Employee ID is required'],
    min: [0, 'Employee ID must be a positive number']
  },
  employmentType: {
    type: String,
    required: [true, 'Employment type is required'],
    minlength: [1, 'Employment type must be at least 1 character long'],
    maxlength: [255, 'Employment type cannot exceed 255 characters']
  },
  startDate: {
    type: Date,
    required: [true, 'Start date is required']
  },
  endDate: {
    type: Date
  }
});

module.exports = mongoose.model('EmpEmployment', EmpEmploymentSchema);
