const mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect(
    process.env.MONGO_URL_LOCAL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => {
      console.log('Mongodb connected');
    }
  );
};
