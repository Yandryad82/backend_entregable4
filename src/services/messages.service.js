const Messages = require('../models/messages.model');

class MessagesService {
  static async create(newMessage) {
      try {
          const result = await Messages.create(newMessage);
          return result;
      } catch (error) {
          throw error;
      }
  }
}

module.exports = MessagesService;