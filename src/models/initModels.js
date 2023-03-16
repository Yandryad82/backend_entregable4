const Users = require('./users.model');
const Messages = require('./messages.model');
const Conversations = require('./conversations.model');
const Participants = require('./participants.model');

const initModels = () => {
   Users.hasMany(Conversations, { foreignKey: 'creatorId' });
   Conversations.belongsTo(Users, { foreignKey: 'creatorId' });
   
   Users.hasMany(Messages, { foreignKey: 'authorId' });
   Messages.belongsTo(Users, { foreignKey: 'authorId' });

   Conversations.hasMany(Messages, { foreignKey: 'conversationId' });
   Messages.belongsTo(Conversations, { foreignKey: 'conversationId' });

   Users.hasMany(Participants, { foreignKey: 'userId' });
   Participants.belongsTo(Users, { foreignKey: 'userId' });

   Conversations.hasMany(Participants, { foreignKey: 'conversationId' });
   Participants.belongsTo(Conversations, { foreignKey: 'conversationId' });
};

module.exports = initModels;