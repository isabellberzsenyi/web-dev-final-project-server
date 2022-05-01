import * as usersDao from "../database/users/users-dao.js";

const signup = async (req, res) => {
  const user = req.body;
  const existingUser = await usersDao.findUserByEmail(user.email);
  if (existingUser) {
    res.sendStatus(403);
  } else {
    const actualUser = await usersDao.createUser(user);
    req.session['currentUser'] = actualUser;
    res.json(actualUser);
  }
}

const signin = async (req, res) => {
  const existingUser = await usersDao.findUserByCredentials(req.body.email, req.body.password);
  if (existingUser) {
    req.session['currentUser'] = existingUser;
    return res.send(existingUser);
  } else {
    return res.sendStatus(503)
  }
}

const profile = (req, res) => {
  const currentUser = req.session['currentUser']
  if (currentUser) {
    res.json(currentUser);
  } else {
    res.sendStatus(503);
  }
}


const signout = (req, res) => {
  req.session.destroy()
  res.sendStatus(200)
}

const updateUser = async (req, res) => {
  const userToUpdate = req.params.userId;
  const updatedUser = req.body;
  await usersDao.updateUser(userToUpdate, updatedUser);
  const existingUser = await usersDao.findUserById(userToUpdate);
  req.session['currentUser'] = existingUser;
  return res.send(existingUser);
}

  const findUserById = async (req, res) => {
  const userId = req.params.uid;
  const actualUser = await usersDao.findUserById(userId);
  res.json(actualUser);
}

const userController = (app) => {
  app.post('/api/users/signup', signup)
  app.post('/api/users/signin', signin)
  app.post('/api/users/signout', signout)
  app.get('/api/users/profile', profile)
  app.put('/api/users/profile/:userId', updateUser)
  app.get('/api/users/findUser/:uId', findUserById)
}

export default userController;