const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({
  name:{
    type:String },
  email:{
    type:String
  },
  mobilenumber:{
    type:Number
  },
  password:{
    type:String
  }
})

const User = mongoose.model('User',UserSchema)
module.exports = User
  