var sess;
var loginUser=function(req)
{
sess = req.session;
sess.name = req.headers.firstname;
return true;
}
module.exports=loginUser;