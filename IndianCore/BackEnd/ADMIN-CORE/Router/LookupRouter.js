const express = require("express");
const TargetRouter = express.Router();

const lookupController = require("../Controller/LookupController");

const { check, body, validationResult } = require("express-validator");

TargetRouter.post("/email-data",
  [
    [
      body("email", "Invalid Email").trim().isEmail()
    ]
  ],

  (request, response) => {
    let error = validationResult(request);
    return lookupController.emailLookup(request, response, error);
  });

TargetRouter.post("/phone-data",
  [
    [
      body("phone.code", "Invalid Phone Code").trim().isNumeric().isLength({ min: 2, max: 3 }),
      body("phone.number", "Invalid Phone Number").trim().isNumeric().isLength({ min: 10, max: 15 })
    ]
  ],

  (request, response) => {
    let error = validationResult(request);
    return lookupController.phoneLookup(request, response, error);
  });


module.exports = TargetRouter;