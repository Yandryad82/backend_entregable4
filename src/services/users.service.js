const Users = require('../models/users.model');
const Conversations = require('../models/conversations.model');

class UsersService {
  
  static async getUser(email) {
    try {
      
      const user = await Users.findOne({
        where: { email },
      });
      return user;
    } catch (error) {
      throw error;
    }
  }
  
  static async create(newUser){
      try {
        const userCreated = await Users.create(newUser);  
        return userCreated;
      } catch (error) {
        throw error;  
      }
  }

  static async get(){
    try {
      const users = await Users.findAll();
      return users;
    } catch (error) {
      throw error;  
    }
}

  static async getConversationsByUser(id){
    try {
      const conversations = await Users.findAll({
        where: {
          id: id
        },
        attributes: ["username", "firstname", "lastname"],
        include: {
          model: Conversations,
          attributes: ["id", "title", "isGroup"],
        }
      });
      return conversations;
    } catch (error) {
      throw error;  
    }
  }
  
}

module.exports = UsersService;