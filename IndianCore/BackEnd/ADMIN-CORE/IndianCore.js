const express = require("express");
const tool = express();
const bodyParser = require("body-parser");
const Config = require("./Support/Config");

//Routers
const deviceRouter = require("./Router/DeviceRouter.js");

tool.use(bodyParser.json());
tool.use(bodyParser.urlencoded({ extended: true }));


/**
 * End Points
**/
tool.use("/api/admin/indcore", deviceRouter);






tool.listen(2408, () => {
  console.log(`Server Started And Connected To... ${Config.PORT.SERVER_PORT}`)


})