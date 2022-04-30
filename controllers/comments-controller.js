import * as commentsDao from "../database/comments/comments-dao.js";

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
  const comments = await commentsDao.findMealComments(mealId);
  res.json(comments);
}

const commentsController = (app) => {
  app.post('/api/comments/comment', createComment);
  app.get('/api/comments/userComments/:userId', findUserComments);
  app.get('/api/comments/mealComments/:mealId', findMealComments);
};

export default commentsController;