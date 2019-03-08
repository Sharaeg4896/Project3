const db = require('../models/user');



module.exports = {
    create: function(req,res) {
        console.log('Hitting create method');
        db.User
            .create({
                username: req.body.username,
                password: req.body.password})
            .then(req.session.user = user.dataValues)
            .catch(err => res.json(err));
    }
    
};