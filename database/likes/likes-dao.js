
import likesModel from "./likes-model.js";

export const findLike = (mealId, userId) => {
  return likesModel.findOne({mealId, userId});
}

export const createLike = (like) => {
  return likesModel.create(like);
};

export const deleteLike = (mealId, userId) => {
  return likesModel.deleteOne({ 
    $and: [
      {mealId: { $eq: mealId }},
      {userId: { $eq: userId }}
    ]
  });
};

export const findUserLikes = (userId) => {
  return likesModel.find({userId});
};

export const findMealLikes = (mealId) => {
  return likesModel.find({mealId});
}