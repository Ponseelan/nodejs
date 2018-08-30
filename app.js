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
var users=mongoose.model("users",userSchema);
var firstUser=new users(
{
name:
{
	firstName : 'Ponselaan',
	lastName : 'madonna'
}
});
mongoose.connect(connection.mongodbConnectionURL,{useNewUrlParser:true},function(err,db)
{
db.createCollection("users",function(errCollection,colection)
{

firstUser.save(function(err)
{
if(err)
	console.log(err);
});
})
});
