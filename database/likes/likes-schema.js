import mongoose from "mongoose";

const likesSchema = mongoose.Schema({
  mealId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
}, { collections: 'likes'});

export default likesSchema;