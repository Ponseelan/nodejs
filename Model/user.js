var mongoose=require("../mongooseConnectable/mongoose.js");
var userSchema=mongoose.Schema(
	{
		
			UserName:String,
			Password:String
		
	});
var Users=mongoose.model("users",userSchema);
module.exports=Users;