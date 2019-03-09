const router = require("express").Router();
const signupController = require ('../../controllers/signupController');

// Matches with route '/api/signup'
router.route('/')
    .post(signupController.create);

module.exports = router;