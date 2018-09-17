var mongoose=require("../mongooseConnectable/mongoose.js");
var userModel=require("../Model/user.js");
var createUser=function(UserName,Password)
{
var user=new userModel(
{

	UserName:UserName,
	Password:Password

});
user.save(function(err)
{
	console.log(err);
})
}
var user={createUser:createUser};
module.exports=user;