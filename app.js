var express=require("express");
var mongoose=require("mongoose");
var mongodb=require("mongodb");
var connection=require("./config/dbconfig.js");
var Usermodel=require("./Model/user.js");
var customsession=require("./controller/SessionController.js");
var router=require("./Routes/routes.js");
var app=express();
app.use(customsession.x);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use("/",router);
app.listen(8085,function()
{
	console.log("server created");
})
