var express = require("express");
var app = express();
var controller = require(__dirname  + "/controllers");
app.use(controller);
var server = app.listen(3000, function(){
   console.log("server is running");
});

app.set("views",__dirname + "/views");
app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/public"));