const server = require("./src/app.js");
const { getAllCampaign } = require("./src/controllers/campaignController.js");
const { conn } = require("./src/db.js");
const { PORT } = process.env;

conn.sync({ alter: true }).then(() => {
  server.listen(PORT, () => {
    console.log("Port listening at", PORT);
  });
});
