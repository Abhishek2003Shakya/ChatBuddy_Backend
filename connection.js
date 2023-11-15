const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.ngoiytb.mongodb.net/ChatBuddy?retryWrites=true&w=majority&appName=AtlasApp`, ()=> {
  console.log('Connected to MongoDB Atlas')
})
