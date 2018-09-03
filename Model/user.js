var mongoose=require("mongoose");
var userSchema=mongoose.Schema(
	{
		name:
		{
			firstName:String,
			lastName:String
		}
	});
var Users=mongoose.model("ponse",userSchema);
module.exports=Users;