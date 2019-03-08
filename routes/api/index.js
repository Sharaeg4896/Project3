const router = require("express").Router();
const loginRoutes = require("./login");
const signupRoutes = require('./signup');

// sign up routes
router.use("/signup", signupRoutes);
// login routes
router.use("/login", loginRoutes);


module.exports = router;
