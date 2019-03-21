const express = require('express');
const PORT = process.env.PORT || 3001;
const db = require('./models')

const app = express();

// middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());






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
