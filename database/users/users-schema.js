import mongoose from "mongoose";

const BASIC_ACCOUNT = 'basic';
const PRO_ACCOUNT = 'pro';

const usersSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  firstName: String,
  lastName: String,
  accountType: {
    type: [BASIC_ACCOUNT, PRO_ACCOUNT],
    required: true,
    lowercase: true
  }
}, { collections: 'users'});

export default usersSchema;