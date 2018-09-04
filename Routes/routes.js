var express=require("express");
var user=require("../controller/UserController.js");
var router=express.Router();
router.get("/login",function(req,res,next)
{
res.end("login");
});
router.get("/",function(req,res,next)
{
console.log("main login page");
res.end("got response");
});
router.post("/registerUser",function(req,res,next)
{
user.createUser(req.headers.firstname,req.headers.lastname);
res.end("user created Successfully");
next();
});
module.exports=router;