const server = require("./src/app.js");
const { getAllCampaign } = require("./src/controllers/campaignController.js");
const { conn } = require("./src/db.js");


conn.sync({ alter: false }).then(() => {
  server.listen(3001, () => {
    console.log("Port listening at 3001");
  });
});
