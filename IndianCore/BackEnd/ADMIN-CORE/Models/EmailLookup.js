
const mongoose=require("mongoose");

const emailLookupSchema=new mongoose.Schema({
  emailRequestId:String,
  emailValue:{
    type:String,
    required:true
  },
  emailLookupData:Object
});

const emailLookupModel=mongoose.model("email_lookup",emailLookupSchema);

module.exports=emailLookupModel;