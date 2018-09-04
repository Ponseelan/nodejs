var mongoose=require("mongoose");
var connection=require("../config/dbconfig.js");
mongoose.connect(connection.mongodbConnectionURL,{useNewUrlParser: true});
module.exports=mongoose;