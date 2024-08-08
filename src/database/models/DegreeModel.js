const mongoose = require('mongoose');
const { Schema } = mongoose;

const DegreeSchema = new Schema({
  degreeCode: {
    type: Number,
    required: [true, 'Degree Code is required'],
    unique: true,
    min: [0, 'Degree Code must be a positive number']
  },
  degreeName: {
    type: String,
    required: [true, 'Degree name is required'],
    minlength: [1, 'Degree name must be at least 1 character long'],
    maxlength: [50, 'Degree name cannot exceed 50 characters']
  }
});

module.exports = mongoose.model('Degree', DegreeSchema);
