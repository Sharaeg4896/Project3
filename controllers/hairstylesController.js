const db = require("../models");

// Defining methods for the hairstylesController
module.exports = {
  findAll: function(req, res) {
    db.hairstyles
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.hairstyles
      .findById(req.params.hairstyles)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

};
