const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 8080;

// middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

if(process.env.NODE_ENV === "production") {
    app.use(express.statis("client/build"));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Napturals" )

app.listen(PORT, function() {
    console.log('API Server now listening on ' + PORT);
})