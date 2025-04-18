

const emailLookupModel=require(".././Models/EmailLookup.js")

const helper=require(".././Common/Helper.js")



const lookupController = {
  "emailLookup":async(request,response,validator)=>{
    try{
      
      if (!validator.isEmpty()){
        return helper.sendFailureMessage(response,
        validator?.["errors"][0]?.["msg"],
        422,
        {});
      }
      let inputEmail = request?.["body"]?.["email"];
      let emailData = await emailLookupModel.findOne({"emailValue":inputEmail},{_id:0,__v:0});
      
      if(helper.emptyChecker(emailData)){
        let emailDetails = await helper.internalCallApi(
          `https://www.ipqualityscore.com/api/json/email/R6qfjJE4NsMKf2UlelWfYC3lLyrOPZPJ/${inputEmail}`,
          {method:"GET"},
          {}
          );
          let storeResults = {
            emailRequestId:await helper.uniqueId(),
            emailValue:emailDetails?.["sanitized_email"],
            emailLookupData:emailDetails
          }
          
         emailData = await emailLookupModel.create(storeResults);
        return helper.sendSuccessMessage(response,"Email Verified Details",200,emailData);
      }else{
        return helper.sendSuccessMessage(response,"Email Verified Details",200,emailData);
      }
      
    }catch(error){
      console.log(error);
    }
  }
};

module.exports=lookupController;