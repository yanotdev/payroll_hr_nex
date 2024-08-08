const mongoose = require('mongoose');
const { Schema } = mongoose;

const MessageSchema = new Schema({
    date: {
        type: Date,
        validate: ()=>{
            return new Date() - new Date(this.date) < 0;
        }
    },
    subject: {
        type: String
    },
    isRead: {
        type: Boolean
    },
    fromId: {
        type: String,
        required: [true, 'Sender ID is required']
    },
    toID: {
        type: String,
        required: [true, 'Receiver ID is required']
    },
    senderName: {
        type: String,
        required: [true, 'Sender Name is required']
    },
    receiverName: {
        type: String,
        required: [true, 'Receiver Name is require']
    },
    body: {
        type: String
    },
    status: {
        type: Boolean
    },
    isLoan: {
        type: Boolean
    }
})

module.exports = mongoose.model('Message', MessageSchema);