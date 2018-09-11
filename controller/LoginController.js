var user=require("../Model/user.js");
var usermodel=new user(
{
	name:
	{
		firstName:"ponseelan",
		lastName:"Emil"
	}
})
var saveUser=function()
{
	usermodel.save();
	return true;
}
module.exports=saveUser;