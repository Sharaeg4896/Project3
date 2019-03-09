var db = require("../models");



module.exports = function(app) {
    
    

    // Get route for login
    // app.route('/api/login', function (req, res) {
        
    //     db.findOne({where: {username: req.body.username}
    //     }).then(function(user) {
    //         console.log(user) 
    //         if(!user) {
    //             console.log("User not found")
    //         }else if(user.validPassword(password)) {
    //             req.session.user = user.dataValues;
    //         } else {
    //             console.log('Password is incorrect')
    //         };
    //     });
    // });
    
    // Post route to create users in DB
    app.post("/api/signup", function(req, res) {
        console.log(req.body)
        db.Users.create({
            username: req.body.username, 
            password: req.body.password
        }).then(function(dbModel){
            res.json(dbModel);
        });
    });
};