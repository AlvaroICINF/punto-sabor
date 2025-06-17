const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  promoteUser,
} = require("../controllers/userController");
const { authenticate, isAdmin } = require("../middlewares/authMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);

router.patch("/:uid/promote", authenticate, isAdmin, promoteUser);

module.exports = router;
