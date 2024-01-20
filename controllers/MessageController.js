const MessageModel = require('../models/MessageModel');

class MessageController {
  async addMessage(req, res) {
    try {
      console.log("[API LOG]: addMessage");

      const { fullname, message } = req.body;

      if (!fullname) {
        return res.status(200).json({
          status_code: 400,
          message: "Tên người gửi không được để trống"
        });
      }

      if (!message) {
        return res.status(200).json({
          status_code: 400,
          message: "Lời chúc không được để trống"
        });
      }

      const newMessage = new MessageModel({
        fullname,
        message
      });

      const result = await newMessage.save();

      return res.status(200).json({
        status_code: 200,
        message: "Gửi lời chúc thành công",
        data: result
      });
    } catch (error) {
      console.log("[API ERROR]:", error);

      return res.status(500).json({
        status_code: 500,
        message: "Server error"
      });
    }
  }

  async getAllMessage(req, res) {
    try {
      console.log("[API LOG]: getAllMessage");

      const messages = await MessageModel.find().lean();

      return res.status(200).json({
        status_code: 200,
        data: messages || []
      });
    } catch (error) {
      console.log("[API ERROR]:", error);

      return res.status(500).json({
        status_code: 500,
        message: "Server error"
      });
    }
  }
}

module.exports = new MessageController();