const express = require("express")
const TargetRouter = express.Router();

const deviceController = require("../Controller/DeviceController");

TargetRouter.get("/device-data", (request, response) => {
  return deviceController.basicDetails(request, response);
});

module.exports = TargetRouter;