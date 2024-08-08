const mongoose = require('mongoose');
const { Schema } = mongoose;

const DesignationSchema = new Schema({
  designationCode: {
    type: Number,
    required: [true, 'Designation ID is required'],
    unique: true,
    min: [0, 'Designation ID must be a positive number']
  },
  designationName: {
    type: String,
    required: [true, 'Designation name is required'],
    minlength: [1, 'Designation name must be at least 1 character long'],
    maxlength: [50, 'Designation name cannot exceed 255 characters']
  }
});

module.exports = mongoose.model('Designation', DesignationSchema);
