var mongoose=require("mongoose");
var mongodbConnectionURL=require("./dbconfig.js");
mongoose.connect(mongodbConnectionURL.mongodbConnectionURL,function(err,db)
{

});