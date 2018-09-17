var usertypemodel=require("../Model/usertype.js");
var getallusertype=function(res)
{
	var result=usertypemodel.find({},function(err,collections)
		{
			res.setHeader('Content-Type', 'application/json');
			res.send(collections);
			res.end();
		});
}
var usertype=
{
	 getallusertype:getallusertype
}
module.exports=usertype;