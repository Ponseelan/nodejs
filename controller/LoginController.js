var user=require("../Model/user.js");
var mongoose=require("../mongooseConnectable/mongoose.js");
var usermodel=new user(
{
	name:
	{
		firstName:"ponseelan",
		lastName:"Emil"
	}
})
var validateUser=function(loginname,callback)
{
	user.findOne({"UserName":loginname},function(err,result)
		{
			if(result && result.UserName)
			{
				callback(true);
			}
			else
			{
				callback(false);
			}
		});
	
}
var saveUser=function()
{
	usermodel.save();
	return true;
}
var login=
{
	validateUser:validateUser
}
module.exports=login;