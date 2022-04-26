import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    unique: true
  },
  firstName: String,
  lastName: String,
  accountType: {
    type: String,
    required: true
  }
}, { collections: 'users'});

export default usersSchema;