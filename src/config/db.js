import fs from "fs";

const getUserFromAccount = (user, cb) => {
  try {
    fs.readFile("accounts.json", "utf8", function (err, data) {
      if (err) {
        return {
          success: false,
          code: 500,
          message: "error occured while reading from Account",
          error: err,
        };
      } else {
        try {
          var users = JSON.parse(data);
          if (users[user] != undefined) {
            return {
              success: true,
              code: 200,
              message: "error occured while reading from Account",
              data: users[user],
            };
          } else {
            return {
              success: false,
              code: 404,
              message: "could not find user",
              error: err,
            };
          }
        } catch (err) {
          return {
            success: false,
            code: 500,
            message: "error occured while reading from Account",
            error: err,
          };
        }
      }
    });
  } catch (err) {
    console.log(err);
  }
};
const addUserToAccount = (user) => {
  fs.readFile("accounts.json", "utf-8", function (err, data) {
    if (err)
      return {
        success: false,
        message: "error occured while reading from Account",
        error: err,
      };
    else {
      try {
        var users = JSON.parse(data);
        users[user.email] = user;
        var newUsers = JSON.stringify(users);
        fs.writeFile("accounts.json", newUsers, "utf-8", function (err, data) {
          if (err) {
            return {
              success: false,
              message: "error occured while writing to Account",
              error: err,
            };
          } else {
            return {
              success: true,
              message: "user saved successfully",
              data: data,
            };
          }
        });
      } catch (err) {
        return {
          success: false,
          message: "error occured,could not write to Account",
          error: err,
        };
      }
      //console.log('Done!');
    }
  });
};

export { getUserFromAccount, addUserToAccount };
