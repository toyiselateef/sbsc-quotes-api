import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const key = process.env.KEY || "SBSC_QUOTE_API_001";

const verifyToken = (req, res, next) => {
  try {
    const token =
      //req.headers["x-access-token"] ||
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTk2Nzg1NTUsImV4cCI6MTY1OTY4NTc1NX0.sUAmuWvYWnEWCSnChlvxmmb0ozXEGUG7uthIP-Rsgcs";
    if (token) {
      jwt.verify(token, key, (err, decoded) => {
        if (err) {
          return res.status(401).json({
            success: false,
            message: "Authorization failed",
            error: err,
          });
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      return res.status(401).json({
        success: false,
        message: "Authorization failed...",
      });
    }
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error occurred, while Authorizating",
    });
  }
};

const Token = ({ id }) => jwt.sign({ id }, key, { expiresIn: "2h" });
export { verifyToken, Token };
