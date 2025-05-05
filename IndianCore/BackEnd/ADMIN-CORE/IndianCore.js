const express = require("express");
const cors = require("cors");
const tool = express();
const bodyParser = require("body-parser");
const Config = require("./Support/Config");
require("./Middleware/Connection.js");



//Routers
const deviceRouter = require("./Router/DeviceRouter.js");

const lookupRouter = require("./Router/LookupRouter.js");

tool.use(bodyParser.json());
tool.use(bodyParser.urlencoded({ extended: true }));

tool.use(cors())

/**
 * End Points
**/
tool.use("/api/admin/indcore", deviceRouter);
tool.use("/api/admin/indcore", lookupRouter);






tool.listen(2408, () => {
  console.log(`Server Started And Connected To... ${Config.PORT.SERVER_PORT}`)
});