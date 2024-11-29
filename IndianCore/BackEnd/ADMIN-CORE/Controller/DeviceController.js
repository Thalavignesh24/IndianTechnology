
const os = require("os");

const deviceController = {
  basicDetails: (request, response) => {
    console.log(request?.headers)
    const headerDetails = request?.headers
    const reqHeaderData = {
      host: headerDetails?.["host"],
      connection: headerDetails?.["connection"],
      userAgent: headerDetails?.["user-agent"],
      hostName: os.hostname(),
      osType: os.type(),
      platform: os.platform(),
      upTime: os.uptime(),
      freeMemory: os.freemem(),
      networks: os.networkInterfaces(),
    }

    return response.status(200).json({
      message: "Device Details",
      data: reqHeaderData
    })
  }
};

module.exports = deviceController;