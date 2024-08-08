const mongoose = require('mongoose');
const { Schema } = mongoose;

const DepartmentSchema = new Schema({
  departmentCode: {
    type: Number,
    required: [true, 'Department Code is required'],
    unique: true,
    min: [0, 'Department Code must be a positive number']
  },
  departmentName: {
    type: String,
    required: [true, 'Department name is required'],
    minlength: [1, 'Department name must be at least 1 character long'],
    maxlength: [50, 'Department name cannot exceed 50 characters']
  }
});

module.exports = mongoose.model('Department', DepartmentSchema);
