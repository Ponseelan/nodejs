var express=require("express");
var mongoose=require("mongoose");
var mongodb=require("mongodb");
var connection=require("./config/dbconfig.js");
var Usermodel=require("./Model/user.js");
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
var app=express();
app.get("/getUsers",function(req,res)
{
Usermodel.find({}, function(err, users1) {
    var userMap1 = {};

    users1.forEach(function(user1) {
      userMap1[user1._id] = user1.name.firstName;
    });

    res.send(userMap1);  
  });
});



app.post("/postUser",function(req,res)
{
res.send("hai ponseelan");
});

var router=express.Router();
router.use(function(req,res,next)
{
	next();
},function(req,res,next)
{
	next();
})
//app.use("/",router);
app.get("/",function(req,res,next)
{
res.download("D:\\sso.log")
res.send("file download");
});
app.listen(8085,function()
{
	console.log("server created");
})
