const mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect(
    'mongodb://127.0.0.1:27017/Passport-React-Tut',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => {
      console.log('Mongodb connected');
    }
  );
};
