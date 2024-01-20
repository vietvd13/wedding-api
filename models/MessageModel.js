const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true
    },
    message: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
  }
);

module.exports = mongoose.model('Message', MessageSchema);