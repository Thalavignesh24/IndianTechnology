const express = require("express");
const TargetRouter = express.Router();

const lookupController = require("../Controller/LookupController");

const {check,body,validationResult} = require("express-validator");

TargetRouter.post("/email-data",
[
  [
    body("email","Invalid Email").trim().isEmail()
  ]
],

(request, response) => {
  let error = validationResult(request);
  return lookupController.emailLookup(request, response,error);
});

module.exports = TargetRouter;