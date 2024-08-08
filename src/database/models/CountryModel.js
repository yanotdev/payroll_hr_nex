const mongoose = require('mongoose');
const { Schema } = mongoose;

const CountrySchema = new Schema({
  countryId: {
    type: Number,
    required: [true, 'Country ID is required'],
    unique: true,
    min: [0, 'Country ID must be a positive number']
  },
  countryName: {
    type: String,
    required: [true, 'Country name is required'],
    minlength: [1, 'Country name must be at least 1 character long'],
    maxlength: [50, 'Country name cannot exceed 255 characters']
  },
  countryCode: {
    type: String,
    minlength: [1, 'Country code must be at least 1 character long'],
    maxlength: [3, 'Country code cannot exceed 3 characters']
}
});

module.exports = mongoose.model('Country', CountrySchema);
