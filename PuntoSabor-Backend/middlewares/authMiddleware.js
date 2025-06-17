const User = require("../database/models/User");
const { admin } = require("../database/firebase");
const { asyncHandler } = require("./errorMiddleware");

const userModel = new User();

const authenticate = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    res.status(401);
    throw new Error("No token provided");
  }

  const token = authHeader.split(" ")[1];

  try {
    req.user = await admin.auth().verifyIdToken(token);
    next();
  } catch (error) {
    res.status(401);
    throw new Error("Not authorized, token failed");
  }
});

const isAdmin = asyncHandler(async (req, res, next) => {
  const user = await userModel.findByEmail(req.user.email);
  if (user?.role !== "admin") {
    res.status(403);
    throw new Error("Not authorized as admin");
  }
  next();
});

module.exports = {
  authenticate,
  isAdmin,
};
