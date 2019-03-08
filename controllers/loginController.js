const db = require('../models');


module.exports = {
    findOne: function(req, res) {
        db.User
            .findOne({where: {username: req.body.username}})
            .then(function (user) {
                if(!user) {
                    console.log('User not found');
                } else if (user.ValidPassword(req.body.password)) {
                    req.session.user = user.dataValues;
                } else {
                    console.log('Password is incorrect');
                }
            })
            .catch(err => res.json(err));
    }
};