var session=require("express-session");
var sess;
var validateSession=function(req)
{
sess=req.session;
if(sess.name)
{
	return true;
}
else
{
	return false;
}
}
var x= session({secret: 'ssshhhhh',resave:true,saveUninitialized:true})
var customsession=
{
	x:x,
	validateSession:validateSession
}
module.exports=customsession;