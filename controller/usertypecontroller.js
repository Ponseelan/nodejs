var usertypemodel=require("../Model/usertype.js");
var getallusertype=function()
{
	var result=usertypemodel.find({},function(err,collections)
		{
			console.log(collections);
		});
	return result;
}
var usertype=
{
	 getallusertype:getallusertype
}
module.exports=usertype;