var express=require("express");
var mongoose=require("mongoose");
var mongodb=require("mongodb");
var connection=require("./config/dbconfig.js");
var userSchema=mongoose.Schema(
	{
		name:
		{
			firstName:String,
			lastName:String
		}
	});
var Users=mongoose.model("ponse",userSchema);
var firstUser=new Users(
{
name:
{
	firstName : 'Ponselaan',
	lastName : 'madonna'
}
});
mongoose.connect(connection.mongodbConnectionURL,{useNewUrlParser:true},function(err,db)
{
firstUser.save(function(err)
{
if(err)
	console.log(err);
});

});
