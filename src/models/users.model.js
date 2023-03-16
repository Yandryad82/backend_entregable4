const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const User = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    username: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
    },

    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    
    firstname: {
        type: DataTypes.STRING(50),
    },

    lastname: {
        type: DataTypes.STRING(50),
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
  },
}, {
    timestamps: true,
    updatedAt: false,
    createdAt: 'created_at',

});

module.exports = User;