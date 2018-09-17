var createCookie=function(username,res)
{
res.cookie("systemcookie",username,{maxAge:80000});
}
var deletecookie=function(res)
{
res.clearCookie("systemcookie");
}
var recreateCookie=function(username,res)
{
	deletecookie(res);
	createCookie(username,res);
}
var cookie={
	createCookie:createCookie,
	deletecookie:deletecookie,
	recreateCookie:recreateCookie
}
module.exports=cookie;