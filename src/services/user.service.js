import { getUserFromAccount, addUserToAccount } from "./../config/db.js";

const createUserService = async (user) => {
  const userOnDB = await getUserFromAccount(user.email);
  if (userOnDB.code == 200) return userOnDB;

  const addUserRes = await addUserToAccount(user);
  return addUserRes;
};

export default createUserService;
