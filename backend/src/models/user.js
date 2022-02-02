/* eslint-disable prettier/prettier */
// eslint-disable-next-line no-undef
const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
  });
  
  // export model user with UserSchema
module.exports = mongoose.model("user", UserSchema);
