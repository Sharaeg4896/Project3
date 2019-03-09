  const router = require("express").Router();
const signupRoutes = require('./signup');
const loginRoutes = require("./login");
const productsRoutes = require('./products');
const hairstylesRoutes = require('./hairstyles');

// sign up route
router.use("/signup", signupRoutes);
// login route
router.use("/login", loginRoutes);
// products route
router.use("/products", productsRoutes);
// hairstyles route
router.use("/hairstyles", hairstylesRoutes);


module.exports = router;
