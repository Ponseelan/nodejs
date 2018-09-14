var mongoose=require("../mongooseConnectable/mongoose.js");
var usertypeschema=mongoose.Schema({
Type:String,
Description:String
});
var usertypemodel=mongoose.model("usertypes",usertypeschema);
module.exports=usertypemodel;