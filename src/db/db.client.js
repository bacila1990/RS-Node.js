const mongoose = require('mongoose');
// const User = require('../resources/users/user.model');
// const Board = require('../resources/boards/board.model');
// const Task = require('../resources/tasks/task.model');

// const users = [
//   new User({ name: 'user1', login: 'admin', password: 'admin' }),
//   new User({ name: 'user2', login: 'log2', password: 'pas2' })
// ];

// const boards = [
//   new Board({ title: 'first', columns: 'one' }),
//   new Board({ title: 'secondary', columns: 'two' })
// ];

const connectToDB = cb => {
  mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('we`re connected!');
    db.dropDatabase();
    // users.forEach(user => user.save());
    // boards.forEach(board => board.save());
    cb();
  });
};

module.exports = { connectToDB };
