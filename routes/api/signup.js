const router = require("express").Router();
const signupController = require ('../../controllers/signupController');

// Matches with route '/api/signup'
router
    .route('/')
    .get(signupController.create);

module.exports = router;