var mongoose=require("../mongooseConnectable/mongoose.js");
var userModel=require("../Model/user.js");
var createUser=function(firstName,lastName)
{
var user=new userModel(
{
name:
{
	firstName:firstName,
	lastName:lastName
}
});
user.save(function(err)
{
	console.log(err);
})
}
var user={createUser:createUser};
module.exports=user;