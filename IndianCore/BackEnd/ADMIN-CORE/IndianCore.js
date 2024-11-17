const express = require("express");
const tool = express();
const bodyParser = require("body-parser");

//Routers
const deviceRouter = require("./Router/DeviceRouter.js");

tool.use(bodyParser.json());
tool.use(bodyParser.urlencoded({ extended: true }));


/**
 * End Points
**/
tool.use("/api/admin/indcore",deviceRouter);


tool.listen(2408,()=>{
  console.log("Server Started...")
})