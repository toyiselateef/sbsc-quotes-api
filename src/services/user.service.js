import { getUserFromAccount, addUserToAccount } from "./../config/db.js";

const createUserService = (user) => {
  const userOnDB = getUserFromAccount(user.email);

  if (userOnDB.code != 200) return userOnDB;

  const addUserRes = addUserToAccount(user);
  return addUserRes;
  // if()
  //   return {
  //     success: true,
  //     code: 201,
  //     message: "user created successfully",
  //     data: addUserRes,
  //   };
};

export default createUserService;
