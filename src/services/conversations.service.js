const Conversations = require('../models/conversations.model');
const Participants = require('../models/participants.model');
const Users = require('../models/users.model');
const Messages = require('../models/messages.model');

class ConversationsService {
  static async createConversationPrivate(data){
      try {
        const conversationCreated = await Conversations.create(data);
        await Participants.create({
          userId: data.creatorId,
          conversationId: conversationCreated.id,
        });
        await Participants.create({
          userId: data.participantId,
          conversationId: conversationCreated.id,
        });  
        return conversationCreated;
      } catch (error) {
        throw error;  
      }
  }

  static async createConversationGroup(data){
    const numberOfParticipants = data.participants.length;
    try {
      const conversationCreated = await Conversations.create(data);
      await Participants.create({
        userId: data.creatorId,
        conversationId: conversationCreated.id,
      });
      for (let i = 0; i < numberOfParticipants; i++) {      
      await Participants.bulkCreate([
        {
        userId: data.participants[i].participantId,
        conversationId: conversationCreated.id,
        }
        
    ])
    };
    
      return conversationCreated;
    } catch (error) {
      throw error;  
    }
}

  static async deleteConversation(id){
    try {
      const conversationDeleted = await Conversations.destroy({
        where: {
          id: id
        }
      });
      return conversationDeleted;
    } catch (error) {
      throw error;  
    }
  }

  static async getAllConversation(){
    try {
      const conversations = await Conversations.findAll({
        attributes: ["id", "title", "isGroup"],
        include: [{
          model: Users,
          attributes: ["username"],
         },
          {
            model: Messages,
            attributes: ["content" ],
          }
        ]
      });
      return conversations;
    } catch (error) {
      throw error;  
    }
  }  
  
}

module.exports = ConversationsService;