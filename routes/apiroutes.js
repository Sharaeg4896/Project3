var db = require("../models");
var bcrypt = require('bcrypt');
var scrape = require('../my-app/src/utils/scrape')
var cookieParser = require('cookie-parser');
var session = require('express-session');







module.exports = function(app) {

    // Commented this out for login purposes
app.use(cookieParser());
app.use(session({
    key: 'user_sid',
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 6000
    }
}));

// if browser=alive but server=dead.. clears cookie info in browser
app.use((req, res, next) => {
    if (req.cookies.user_sid && !req.session.user){
        res.clearCookie('user_sid')
    }
    next();
    
});
    

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
        }).then( (user) => {
            if(!user) {
                console.log('User not found');
            } else if (user.validPassword(password)) {
                console.log('WORKING!')
                req.session.user = user.dataValues;
                window.location.href= '/search'   
                
            } else {
                alert('Password is incorrect');
            }
        })
        .catch(err => res.json(err));
        
    });


    app.route('/api/hairTips')
        .get((req, res) => {
            // This was used to scrape the tip data. 
            // return scrape()
            // .then((tips) => {
            //      for (var i = 0; i < tips.length; i++) {
            //         db.HairTips.create(tips[i])
            //     }
        
            // })
            // .catch((err) => {
            //     console.log('err: ', err);
            //     res.json(err)
            // })
           
            // Code to find all hairtips in db
            db.HairTips.findAll()
            .then(function(found) {
                console.log('length', found.length)
                console.log('found', found)
                res.json(found)
            })
            .catch((err) => {
                console.log(err);
            })
           
    })
    

    
};

