var express=require("express");
var user=require("../controller/UserController.js");
var router=express.Router();
var Customsession=require("../controller/SessionController.js");
var login=require("../controller/LoginController.js");
var cookie=require("../controller/cookiecontroller.js");
var usertype=require("../controller/usertypecontroller.js");
router.use(function(req,res,next)
{
	var cookie=req.cookies;
	if(cookie.systemcookie || req.originalUrl=="/login" || req.originalUrl=="/register")
	{
		next();
	}
	else if(req.originalUrl=="/")
	{
		next();
	}
	else if(req.originalUrl!="/" && req.originalUrl.endsWith(".html"))
	{
		res.sendFile(__dirname+req.originalUrl);
	}
	else
	{
		res.redirect("/");
	}
})
router.post("/login",function(req,res,next)
{
login.validateUser(req.body.username,function(isloggedin)
{
if(isloggedin)
{
	cookie.createCookie(req.body.username,res);
	res.render("dashboard");
}
else
{
	res.redirect("/");
}
})
});
router.get("/",function(req,res,next)
{
	res.render("index");
});
router.get("/register",function(req,res,next)
{
res.render("register");
});
router.post("/registerUser",function(req,res,next)
{
user.createUser(req.body.UserName,req.body.Password);
res.redirect("index");
});
router.get("/logout",function(req,res,next)
{
	cookie.deletecookie(res);
	res.redirect("/");
})
router.get("/about",function(req,res,next)
{
	res.render("about");
})
router.get("/getdata",function(req,res,next)
{
var result=usertype.getallusertype(res);
});
module.exports=router;