import mongoose from "mongoose";

const commentsSchema = mongoose.Schema({
  mealId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  }
}, { collections: 'comments'});

export default commentsSchema;