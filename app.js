var express = require("express");
var app = express();
var homecontroller = require(__dirname + "/controllers/homecontroller.js");

app.use("/", homecontroller);

// Serve static files from "public" directory
app.use(express.static(__dirname + "/public"));

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

var server = app.listen(3000, function() {
    console.log("Server is running on port 3000");
});
