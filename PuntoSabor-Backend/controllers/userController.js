const User = require("../database/models/User");
const { admin } = require("../database/firebase");
const { asyncHandler } = require("../middlewares/errorMiddleware");

const userModel = new User();

//@desc    Register a new user
//@route   POST /api/v1/users/register
//@access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!password || password.length < 6) {
    res.status(400);
    throw new Error("Password must be at least 6 characters");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    res.status(400);
    throw new Error("Invalid email format");
  }

  const uid = await userModel.create({ name, email, password });
  const user = await userModel.getById(uid);

  res.status(201).json({
    success: true,
    data: user,
  });
});

//@desc    Authenticate user and get token
//@route   POST /api/v1/users/login
//@access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findByEmail(email);
  if (!user) {
    throw new Error("Invalid credentials");
  }

  const token = await admin.auth().createCustomToken(user.uid);

  res.status(200).json({
    success: true,
    token,
    data: {
      uid: user.uid,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });
});

//@desc    Promote user to admin role
//@route   PATCH /api/v1/users/:uid/promote
//@access  Private/Admin
const promoteUser = asyncHandler(async (req, res) => {
  const { uid } = req.params;
  await userModel.promoteToAdmin(uid);

  const updatedUser = await userModel.getById(uid);

  res.status(200).json({
    success: true,
    message: "User promoted to admin",
    data: updatedUser,
  });
});

module.exports = {
  registerUser,
  loginUser,
  promoteUser,
};
