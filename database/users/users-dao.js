import usersModel from "./users-model.js";

export const findAllUsers = () => {
  return usersModel.find();
}

export const findUserById = (id) => {
  return usersModel.findById(id);
}

export const findUserByEmail = (email) => {
  return usersModel.findOne({email});
}

export const findUserByCredentials = (email, password) => {
  return usersModel.findOne({email, password});
}

export const createUser = (user) => {
  return usersModel.create(user);
}

export const deleteUser = (id) => {
  return usersModel.deleteOne({ _id: id });
}

export const updateUser = (id, updateUser) => {
  return usersModel.updateOne(
    { _id: id },
    {$set: updateUser}
  );
}