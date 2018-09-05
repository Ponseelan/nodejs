var express=require("express");
var user=require("../controller/UserController.js");
var router=express.Router();
var Customsession=require("../controller/SessionController.js");
var loginUser=require("../controller/LoginController.js");
//router.use("/",function(req,res,next)
//{
	//if(sessionvalidation(req))
	//	next();
	//else
	//	res.end("logged out");
//})
router.post("/login",function(req,res,next)
{
if(loginUser(req))
	res.end("login successfull");
else
	res.end("login failed");
});
router.get("/",function(req,res,next)
{
	res.render("index");
});
router.post("/registerUser",function(req,res,next)
{
user.createUser(req.headers.firstname,req.headers.lastname);
res.end(req.headers.firstname+"created Successfully");
next();
});
module.exports=router;