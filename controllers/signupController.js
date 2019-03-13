const db = require('../models');
var bcrypt = require('bcrypt');



module.exports = {
    create: function(req, res) {
        console.log('Hitting create method');
        var username = req.body.username;
        var password = req.body.password;
        console.log(req.body);
        console.log('grabbed from the view:', username, password);
        db.Users.beforeCreate((user, options) => {
            var salt = bcrypt.genSaltSync();
            user.password = bcrypt.hashSync(user.password, salt);
        })
        db.Users.prototype.validPassword = function(password){
            return bcrypt.compareSync(password, this.password);
        }
        db.Users
            .create({username: username, password: password})
            .then(user => {req.session.user = user.dataValues})
            .catch(err => res.json(err));
    }
    
};