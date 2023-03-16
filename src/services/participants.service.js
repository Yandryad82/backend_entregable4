const Participants = require('../models/participants.model');

class ParticipantsService {
  static async create(data){
      try {
        const participantsCreated = await Participants.create(data);  
        return participantsCreated;
      } catch (error) {
        throw error;  
      }
  }
  
}

module.exports = ParticipantsService;