var db = require("../models");

module.exports = function(app) {
    //////////////////// Hairstyles ////////////////////////////
    app.route('/hairstyles')
    .get((req, res) => {
        db.Hairstyles
        .findAll({})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    });

    app.route('/hairstyles/:hairstyle')
    .get((req, res) => {
        db.Hairstyles
        .findAll({
            where: {
                hairstyle: req.params.hairstyle
        }
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    });
    
    app.route('/hairstyleCategories')
    .get((req, res) => {
        db.Hairstyles
        .findAll({
            attributes: ['hairstyle'],
            group: ['hairstyle']
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    });
   //////////////////// PRODUCTS ////////////////////////////
    app.route('/products')
    .get((req, res) => {
        db.Products
        .findAll({})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    });

    app.route('/products/:category')
    .get((req, res) => {
        db.Products
        .findAll({
            where: {
                category: req.params.category
        }
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    });
    
    app.route('/productsCategories')
    .get((req, res) => {
        db.Products
        .findAll({
            attributes: ['category'],
            group: ['category']
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    });

    
};