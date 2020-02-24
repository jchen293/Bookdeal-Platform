// /backend/user.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//this will be our data base's data structure
const UserSchema = new Schema({
  username: String,
  email: String,
  firstname: String,
  lastname: String,
  password: String,
  interestsList: [],
  salt: String
});

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("User", UserSchema);
