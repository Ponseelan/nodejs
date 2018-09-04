var express=require("express");
var mongoose=require("mongoose");
var mongodb=require("mongodb");
var connection=require("./config/dbconfig.js");
var Usermodel=require("./Model/user.js");
var router=require("./Routes/routes.js");
var app=express();
app.use("/",router);
app.listen(8085,function()
{
	console.log("server created");
})
