import * as likesDao from "../database/likes/likes-dao.js";

const toggleLike = async (req, res) => {
  const likeModel = req.body;
  const existingLike = await likesDao.findLike(likeModel.mealId, likeModel.userId);
  if (existingLike) {
    await likesDao.deleteLike(likeModel.mealId, likeModel.userId);
    res.sendStatus(200);
  } else {
    const actualLike = await likesDao.createLike(likeModel);
    res.json(actualLike);
  }
};

const findUserLikes = async (req, res) => {
  const userId = req.body.userId;
  const likes = await likesDao.findUserLikes(userId);
  res.json(likes);
};

const findMealLikes = async (req, res) => {
  const mealId = req.body.mealId;
  const likes = await likesDao.findMealLikes(mealId);
  res.json(likes);
}

const likesController = (app) => {
  app.post('/api/likes/like', toggleLike);
  app.get('/api/likes/userLikes', findUserLikes);
  app.get('/api/likes/mealLikes', findMealLikes);
};

export default likesController;