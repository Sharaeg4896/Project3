const express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
const app = express();
const PORT = process.env.PORT || 3001;
const db = require('./models')


// middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

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


// Routes 
require("./routes/apiroutes")(app)
require("./routes/index.js")(app);


if(process.env.NODE_ENV === "production") {
    app.use(express.statis("client/build"));
}
// syncing our sequelize models and starting our express app. 
db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log('API Server now listening on ' + PORT);
    })
})
