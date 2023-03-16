const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./utils/database');
const initModels = require('./models/initModels');
const userRoutes = require('./routes/users.route');
const conversationRoutes = require('./routes/conversations.route');
const messagesRoutes = require('./routes/messages.route');
const errorHandlerRouter = require('./routes/errorHandler.route');


initModels();
const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const port = 8000;

db.authenticate()
  .then(() => {
    console.log('Database connected...');
  })
  .catch((error) => console.log(error));

  db.sync({force: true})
  .then(() => {
    console.log('Database synced...');
  })
  .catch((error) => console.log(error));

  app.use(userRoutes);
  app.use(conversationRoutes);
  app.use(messagesRoutes);
  

app.get('/', (req, res) => {
    res.send('Welcome to my API CHAT!');
});

errorHandlerRouter(app);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});