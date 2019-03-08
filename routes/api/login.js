const router = require("express").Router();
const loginController = require ('../../controllers/loginController');


// Matches with route '/api/login'
router
    .route('/login')
    .post(loginController.findOne);

module.exports = router;
   