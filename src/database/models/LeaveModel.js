const mongoose = require("mongoose");
const { Schema } = mongoose;

const LeaveSchema = new Schema({
    staffId: {
        type: String,
        required: [true, 'Staff ID is required']
    },
    staffName: {
        type: String,
        required: [true, 'Staff Name is required'],
        minlength: [1, 'Name must be at least 1 character long'],
        maxlength: [255, 'Name must not exceed 255 characters']
    },
    leaveType: {
        type: String
    },
    fromDate: {
        type: Date,
        validate: ()=>{
            return new Date() - new Date(this.fromDate) < 0;
        }
    },
    toDate: {
        type: Date,
        validate: ()=>{
            return new Date() - new Date(this.toDate) < 0;
        }
    },
    noDays: {
        type: String
    },
    recall: {
        type: String
    },
    balance: {
        type: String
    },
    reason: {
        type: String
    },
    remark: {
        type: String
    },
    statue: {
        type: Boolean
    },
    isDeclines: {
        type: Boolean
    },
    created: {
        type: Date,
        validate: ()=>{
            return new Date() - new Date(this.created) < 0;
        }
    },
    updated: {
        type: Date,
        validate: ()=>{
            return new Date() - new Date(this.updated) < 0;
        }
    }
})

module.exports = mongoose.model('Leave', LeaveSchema);