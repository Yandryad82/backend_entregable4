const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Message = db.define('messages', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  authorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'author_id',
  },

  conversationId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'conversation_id',
  },

}, {
  timestamps: true,
  updatedAt: false,
});

module.exports = Message;