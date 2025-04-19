const mongoose=require("mongoose");

const phoneLookupSchema=new mongoose.Schema({
  phoneRequestId:String,
  phoneValue:{
    type:String,
    required:true
  },
  phoneLookupData:Object
});

const phoneLookupModel=mongoose.model("phone_lookup",phoneLookupSchema);

module.exports=phoneLookupModel;