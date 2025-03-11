var express = require("express");
var app = express();
var controller = require(__dirname + "/controllers"); 
var homecontroller   = require(__dirname + "/controllers/homecontroller.js"); 
app.use("/", homecontroller); 

var server = app.listen(3000, function() {
    console.log("Server is running");
});

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/public"));
