import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const key = process.env.KEY || "SBSC_QUOTE_API_001";

const verifyToken = (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (token) {
    jwt.verify(token, process.env.KEY, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          message: "Authorization failed",
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(401).json({
      message: "Authorization failed",
    });
  }
};

const Token = ({ id }) => jwt.sign({ id }, key, { expiresIn: "2h" });
export { verifyToken, Token };
