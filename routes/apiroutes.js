var db = require("../models");
var bcrypt = require('bcrypt');


module.exports = function(app) {

    app.route('/api/signup')
    .post((req, res) => {
        db.Users.beforeCreate((user, options) => {
            var salt = bcrypt.genSaltSync();
            user.password = bcrypt.hashSync(user.password, salt);
        })
        db.Users.prototype.validPassword = function(password){
            return bcrypt.compareSync(password, this.password);
        }
        db.Users.create({
            username: req.body.username,
            password: req.body.password
        }).then(user => {
            req.session.user = user.dataValues;
    
        })
        .catch(error => {
            console.log(error);
        
        });
    });

    app.route('/api/login')
    .post((req, res) => {
        var username = req.body.username;
        var password = req.body.password;
    
        db.Users.findOne({ where: {username: username} 
        }).then(function (user) {
            if(!user) {
                console.log('User not found');
            } else if (user.validPassword(password)) {
                console.log('WORKING!')
                req.session.user = user.dataValues;
               
            } else {
                console.log('Password is incorrect');
            }
        })
        .catch(err => res.json(err));
        
    });

    
};
