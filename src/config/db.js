import fs from "fs";
import fsp from "fs/promises";

const getUserFromAccount = async (user) => {
  //var file await fs.readFile("accounts.json", "utf8", function (err, data) {
  try {
    var data = await fsp.readFile("accounts.json", {
      encoding: "utf8",
    });
    if (!data)
      return {
        success: false,
        code: 500,
        message: "error occured while reading from Account",
        error: err,
      };

    var users = JSON.parse(data);
    var foundUser = users[user];
    if (!foundUser) {
      return {
        success: false,
        code: 404,
        message: "could not find user",
      };
    }

    return {
      success: true,
      code: 200,
      message: "user retrieved from Account successfully",
      data: foundUser,
    };
  } catch (err) {
    return {
      success: false,
      code: 500,
      message: "error occured while reading from Account",
      error: err,
    };
  }
};
const addUserToAccount = async (user) => {
  try {
    var data = await fsp.readFile("accounts.json", {
      encoding: "utf8",
    });

    var users = JSON.parse(data);
    users[user.email] = user;

    var newUsers = JSON.stringify(users);
    await fsp.writeFile("accounts.json", newUsers);
    var userView = Object.entries(users).map((x) => {
      return {
        username: x[1].username,
        email: x[1].email,
      };
    });

    return {
      success: true,
      message: "user saved successfully",
      code: 201,
      data: userView,
    };
  } catch (err) {
    return {
      success: false,
      code: 500,
      message: "error occured, could not write to Account file",
      error: err,
    };
  }
  //console.log('Done!');
};

export { getUserFromAccount, addUserToAccount };
