const mongoose = require('mongoose');
const { Schema } = mongoose;

const EmpExperienceSchema = new Schema({
    registrationId: {
        type: Number,
        required: [true, 'Registration ID is required']
    },
    compName: {
        type: String
    },
    jobPosition: {
        type: String
    },
    dateJoined: {
        type: Date,
        validate: ()=>{
            return new Date() - new Date(this.dateJoined) < 0;
        }
    },
    dateLeft: {
        type: Date,
        validate: ()=>{
            return new Date() - new Date(this.dateJoined) < 0;
        }
    },
    isDeleted: {
        type: Boolean
    }
})

module.exports = mongoose.model('EmpExperience', EmpExperienceSchema);