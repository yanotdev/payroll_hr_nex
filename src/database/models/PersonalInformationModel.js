const mongoose = require('mongoose');
const { validate } = require('./AllowanceModel');
const { Schema } = mongoose;

const PersonalInformationSchema = new Schema({
    registrationId: {
        type: Number
    },
    staffNo: {
        type: String,
        required: [true, 'staffNo is required'],
        unique: true
    },
    titleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'NameTitle'
    },
    surname: {
        type: String,
        required: [true, 'Surname is required'],
        minlength: [1, 'Surname must be at least 1 character long'],
        maxlength: [255, 'Surname must be 255 characters long.']
    },
    middleName: {
        type: String,
        minlength: [1, 'Middle name must be at least 1 character long'],
        maxlength: [255, 'Surname should not exceed 255 characters']
    },
    firstName: {
        type: String,
        required: [true, 'First name is required'],
        minlength: [1, 'First name must be at least 1 character long'],
        maxlength: [255, 'First name should not exceed 255 characters']
    },
    dateofBirth: {
        type: Date,
        validate: ()=>{
            return new date - new date(this.dateofBirth) < 0
        }
    },
    maritalStatus: {
        type: String
    },
    gender: {
        type: String
    },
    nationality: {
        type: String
    },
    stateOfOrigin: {
        type: String
    },
    religion: {
        type: String
    },
    spouseName: {
        type: String
    },
    disability: {
        type: String
    },
    disabilityDescription: {
        type: String
    },
    imageUrl: {
        type: String
    },
    staffStatus: {
        type: String
    }
})

module.exports = mongoose.model('PersonalInformation', PersonalInformationSchema);