
import mongoose from 'mongoose';

const attachmentSchema = new mongoose.Schema({
  fileName: {
    type: String,
    min: [3, 'File name must be at least 3 characters long.'],

  },
  fileType: {
    type: String,
    enum: ATTACHMENT_FILE_TYPES,
    validate: (value) => {
        if (!ATTACHMENT_FILE_TYPES.includes( value )) { 
            return 'Invalid file type. Please select one of the following: ' + ATTACHMENT_FILE_TYPES.join(', '); 
        }
        return
    }
  },
  fileSize: {
    type: Number
  },
  publicId: {
    type: String
  },
  url: {
    type: String
  },
  description: {
    type: String
  }
});

module.exports = mongoose.model('Attachment', attachmentSchema);