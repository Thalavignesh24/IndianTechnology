

const emailLookupModel = require(".././Models/EmailLookup.js");

const phoneLookupModel = require(".././Models/PhoneLookup.js");



const helper = require(".././Common/Helper.js")



const lookupController = {
  "emailLookup": async (request, response, validator) => {
    try {

      if (!validator.isEmpty()) {
        return helper.sendFailureMessage(response,
          validator?.["errors"][0]?.["msg"],
          422,
          {
            code: 422,
            "message": validator?.["errors"][0]?.["msg"],
          }
        );
      }
      let inputEmail = request?.["body"]?.["email"];
      let emailData = await emailLookupModel.findOne({ "emailValue": inputEmail }, { _id: 0, __v: 0 });

      if (helper.emptyChecker(emailData)) {
        let emailDetails = await helper.internalCallApi(
          `https://www.ipqualityscore.com/api/json/email/R6qfjJE4NsMKf2UlelWfYC3lLyrOPZPJ/${inputEmail}`,
          { method: "GET" },
          {}
        );
        if (emailDetails?.["success"] === false) {
          return helper.sendFailureMessage(response,
            emailDetails?.["message"],
            422,
            {});
        }
        let storeResults = {
          emailRequestId: await helper.uniqueId(),
          emailValue: emailDetails?.["sanitized_email"],
          emailLookupData: emailDetails
        }

        emailData = await emailLookupModel.create(storeResults);
        return helper.sendSuccessMessage(response, "Email Verified Details", 200, emailData);
      } else {
        return helper.sendSuccessMessage(response, "Email Verified Details", 200, emailData);
      }

    } catch (error) {
      console.log(error);
    }
  },


  "phoneLookup": async (request, response, validator) => {
    try {

      if (!validator.isEmpty()) {
        return helper.sendFailureMessage(response,
          validator?.["errors"][0]?.["msg"],
          422,
          {});
      }
      let inputPhone = String(request?.["body"]?.["phone"]?.["code"] + request?.["body"]?.["phone"]?.["number"]);
      let phoneData = await phoneLookupModel.findOne({ "phoneValue": inputPhone }, { _id: 0, __v: 0 });

      if (helper.emptyChecker(phoneData)) {
        let phoneDetails = await helper.internalCallApi(
          `https://www.ipqualityscore.com/api/json/phone/R6qfjJE4NsMKf2UlelWfYC3lLyrOPZPJ/${inputPhone}`,
          { method: "GET" },
          {}
        );

        if (phoneDetails?.["success"] === false) {
          return helper.sendFailureMessage(response,
            phoneDetails?.["message"],
            422,
            {});
        }
        let storeResults = {
          phoneRequestId: await helper.uniqueId(),
          phoneValue: phoneDetails?.["formatted"].slice(1),
          phoneLookupData: phoneDetails
        }

        phoneData = await phoneLookupModel.create(storeResults);
        return helper.sendSuccessMessage(response, "Phone Number Verified Details", 200, phoneData);
      } else {
        return helper.sendSuccessMessage(response, "Phone Number Verified Details", 200, phoneData);
      }

    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = lookupController;