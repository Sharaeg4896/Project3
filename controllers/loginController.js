const db = require('../models');


module.exports = {
    findOne: function(req, res) {
        db.Users
            .findOne({where: {username: req.body.username}})
            .then(function (user) {
                if(!user) {
                    console.log('User not found');
                } else if (user.validPassword(req.body.password)) {
                    req.session.user = user.dataValues;
                    console.log('logged IN!')
                } else {
                    console.log('Password is incorrect');
                }
            })
            .catch(err => res.json(err));
    }
};