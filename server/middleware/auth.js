// middleware/auth.js
const jwt = require("jsonwebtoken");
require("dotenv").config();


const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  console.log("Auth Header:", req.headers["authorization"]);

  const token = authHeader.split(" ")[1]; // Expect: Bearer <token>
  if (!token) {
    return res.status(401).json({ message: "Invalid token format" });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    next(); // ✅ valid token → move to controller
  } catch (err) {
    return res.status(403).json({ message: "Token not valid" });
  }
};

module.exports = authMiddleware;
