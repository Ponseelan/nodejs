var userSchema=mongoose.Schema(
	{
		name:
		{
			firstName:String,
			lastName:String
		}
	});
var Users=mongoose.model("ponse",userSchema);
var User=new Users(
{
name:
{
	firstName : 'Ponselaan',
	lastName : 'madonna'
}
});
module.exports=User;