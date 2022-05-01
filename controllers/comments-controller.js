import * as commentsDao from "../database/comments/comments-dao.js";
import * as usersDao from "../database/users/users-dao.js";

const createComment = async (req, res) => {
  const commentsModel = req.body;
  const comment = await commentsDao.createComment(commentsModel);
  res.json(comment);
};

const findUserComments = async (req, res) => {
  const userId = req.params.userId;
  const comments = await commentsDao.findUserComments(userId);
  res.json(comments);
};

const findMealComments = async (req, res) => {
  const mealId = req.params.mealId;
  let comments = await commentsDao.findMealComments(mealId);
  comments = await Promise.all(comments.map( async (c) => {
    const user = await usersDao.findUserById(c.userId);
    if (user) {
      return {
        _id: c._id,
        comment: c.comment,
        mealId: c.mealId,
        userId: c.userId,
        firstName: user.firstName,
        lastName: user.lastName
      };
    }
    return  c
  }))
  res.json(comments);
}

const commentsController = (app) => {
  app.post('/api/comments/comment', createComment);
  app.get('/api/comments/userComments/:userId', findUserComments);
  app.get('/api/comments/mealComments/:mealId', findMealComments);
};

export default commentsController;