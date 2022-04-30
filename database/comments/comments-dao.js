import commentsModel from "./comments-model.js";

export const findComments = (mealId, userId) => {
  return commentsModel.findOne({mealId, userId});
}

export const createComment = (comment) => {
  return commentsModel.create(comment);
};

export const deleteComment = (mealId, userId, comment) => {
  return commentsModel.deleteOne({
    $and: [
      {mealId: { $eq: mealId }},
      {userId: { $eq: userId }},
      {comment: { $eq: comment }},
    ]
  });
};

export const findUserComments = (userId) => {
  return commentsModel.find({ userId });
};

export const findMealComments = (mealId) => {
  return commentsModel.find({ mealId });
}