const mongoose = require('mongoose');
const { Schema } = mongoose;

const EmployeeInfoSchema = new Schema({
   staffNo: {
    type: String,
    required: [true, 'staffNo is required'],
    unique: true
  },
  recordId: {
    type: Number
  },
  branchCode: {
    type: Number,
    required: [true, 'Branch ID is required'],
    unique: true,
    min: [0, 'Branch ID must be a positive number']
  },
  dateJoined: {
    type: Date,
    validate: ()=>{
        return new Date() - new Date(this.dateJoined) < 0;
    }
  },
  grade: {
    type: String
  },
  maritalStatus: {
    type: String,
    enum: ["single","married"],
    required: [true, 'Marital status is required'],
    minlength: [1, 'Marital status must be at least 1 character long'],
    maxlength: [50, 'Marital status cannot exceed 50 characters']
  },
  designation: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Designation'
  },
  employeeType: {
    type: mongoose.Schema.Types.ObjectId, ref: 'EmployeeType'
  },
  deptCode: {
    type: Number
  },
  supervisorCode: {
    type: Number
  },
  jobDescription: {
    type: String
  }
});

module.exports = mongoose.model('EmployeeInfo', EmployeeInfoSchema);
