const server = require("./src/app.js");
//const { getAllCampaign } = require("./src/controllers/campaignController.js");
const { conn } = require("./src/db.js");
require('dotenv').config()

conn.sync({ alter: true }).then(() => {
  server.listen(process.env.PORT, () => {
    console.log("Port listening at 3001");
  });
});
