var express = require("express");
var router = express.Router();

router.use("/", function(req,res){
    //res.json({"message": "this is home"});
    res.render("./public/index.ejs");
});
module.exports = router;