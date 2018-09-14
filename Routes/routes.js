var express=require("express");
var user=require("../controller/UserController.js");
var router=express.Router();
var Customsession=require("../controller/SessionController.js");
var loginUser=require("../controller/LoginController.js");
var createCookie=require("../controller/cookiecontroller.js");
var usertype=require("../controller/usertypecontroller.js");
//router.use("/",function(req,res,next)
//{
	//if(sessionvalidation(req))
	//	next();
	//else
	//	res.end("logged out");
//})
router.use(function(req,res,next)
{
	/*var cookie=req.cookies;
	if(!cookie.ponseelan && req.originalUrl=="/login")
	{*/		
		next();
	/*}
	else
	{
	res.render("register");
	}*/
})
router.post("/login",function(req,res,next)
{
if(loginUser())
{
	createCookie(res);
	res.end("login successfull");
}
else
	res.end("login failed");
});
router.get("/",function(req,res,next)
{
	res.render("register");
});
router.post("/registerUser",function(req,res,next)
{
user.createUser(req.headers.firstname,req.headers.lastname);
res.end(req.headers.firstname+"created Successfully");
next();
});
router.get("/getdata",function(req,res,next)
{
var result=usertype.getallusertype();
res.setHeader('Content-Type', 'application/json');
res.send([{ "a": "1" },{ "a": "2" }]);
res.end();
});
module.exports=router;