var express=require("express");
var router=express.Router();
router.get("/login",function(req,res,next)
{
res.end("login");
});
router.get("/",function(req,res,next)
{
console.log("main login page");
});
module.exports=router;