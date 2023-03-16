const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Conversation = db.define('conversations', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    isGroup: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      field: 'is_group',
    },
    creatorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'creator_id',
    },
  },{
    timestamps: true,
    updatedAt: false,
    createdAt: 'created_at',
});

module.exports = Conversation;