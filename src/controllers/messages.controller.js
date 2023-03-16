const MessagesService = require('../services/messages.service');

const createMessage = async (req, res, next) => {
  try {
    const {body} = req;
    const message = await MessagesService.create(body);
    res.status(201).json(message);
  } catch (error) {
    next(error)
  }
}

module.exports = {
  createMessage
};
