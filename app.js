var express=require("express");
var mongoose=require("mongoose");
var mongodb=require("mongodb");
var connection=require("./config/dbconfig.js");
var Usermodel=require("./Model/user.js");
var router=require("./Routes/routes.js");
var app=express();
var firstUser=new Usermodel(
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
else
	console.log(firstUser.name.firstName+" Saved Successfully");
});

});
app.use("/",router);
app.listen(8085,function()
{
	console.log("server created");
})
