const router = require("express").Router();
const productController = require ('../../controllers/productController');


// Matches with route '/api/products'
router
    .route('/products')
    .get(productController.findAll);

// Matches with route '/api/products/:brand/:category'
router 
    .route("/:brand/:category")
    .get(productController.findById)

module.exports = router;
   