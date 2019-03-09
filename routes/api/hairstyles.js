const router = require("express").Router();
const hairstylesController = require ('../../controllers/hairstylesController');


// Matches with route '/api/hairstyles'
router
    .route('/hairstyles')
    .get(hairstylesController.findAll);

router 
    .route("/:id")
    .get(hairstylesController.findById)

module.exports = router;
   