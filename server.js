const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const bcrypt = require('bcryptjs');
require('./config/passportConfig')();
const User = require('./models/User');
const authRoutes = require('./routes/authRoutes');
require('./config/dbConnect')();

const app = express();

//Middleware
app.use(express.json());
app.use(
  session({
    secret: 'Node js',
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser('Node js'));

//Initialise passport
app.use(passport.initialize());

//Routes
app.use('/', authRoutes);
app.listen(5000, () => {
  console.log(`Server is runing on port 5000`);
});
