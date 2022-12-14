import bcrypt from "bcrypt";
import createUserService from "./../services/user.service.js";
import { Token } from "../middleware/auth.js";
import { getUserFromAccount } from "./../config/db.js";

const createUser = async (req, res) => {
  // try{

  var hash = await bcrypt.hash(req.body.password, 15);
  const password = hash;
  const user = {
    username: req.body.username,
    email: req.body.email,
    firstName: req.body.firstname,
    lastName: req.body.lastname,
    password,
  };

  if (!user.username || !user.email || !user.password) {
    return res.status(400).json({
      success: false,
      message: "Please ensure you fill the username, email, and password",
    });
  }

  const resp = await createUserService(user);

  return res.status(resp.code).json(resp);
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid details" });
    }

    var existingUser = await getUserFromAccount(email);
    if (!existingUser) {
      return res.status(401).json({
        success: false,
        message: "user not found, please create user",
      });
    }

    var compareRes = await bcrypt.compare(password, existingUser.data.password);

    if (!compareRes) {
      return res.status(401).json({
        success: false,
        message: "Not authorized",
      });
    }

    const token = Token(existingUser);
    return res.status(200).json({
      message: "User authorization successful",
      user: {
        username: existingUser.data.username,
        email: existingUser.data.email,
      },
      token,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Server error.", error: err });
  }
  return;
};

export { createUser, login };
