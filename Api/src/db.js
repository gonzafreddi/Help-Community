require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const database = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/helpcommunity`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

modelDefiners.forEach((model) => model(database));

let entries = Object.entries(database.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
database.models = Object.fromEntries(capsEntries);

const { Campaign, Category, Donation, Ong_donor, State } = database.models;

// Ong_donor.hasMany(Campaign);
// Campaign.belongsTo(Ong_donor);

Ong_donor.belongsToMany(Campaign, { through: "Ong_donor_Campaign" });
Campaign.belongsToMany(Ong_donor, { through: "Ong_donor_Campaign" });

// Ong_donor.hasMany(Donation);
// Donation.belongsTo(Ong_donor);

Ong_donor.belongsToMany(Donation, { through: "Ong_donor_Donation" });
Donation.belongsToMany(Ong_donor, { through: "Ong_donor_Donation" });

// Category.hasMany(Campaign);
// Campaign.belongsTo(Category);

Category.belongsToMany(Campaign, { through: "Category_Campaign" });
Campaign.belongsToMany(Category, { through: "Category_Campaign" });

// Campaign.hasMany(Donation);
// Donation.belongsTo(Campaign);

Campaign.belongsToMany(Donation, { through: "Campaign_Donation" });
Donation.belongsToMany(Campaign, { through: "Campaign_Donation" });

// State.hasMany(Ong_donor);
// Ong_donor.belongsTo(State);

State.belongsToMany(Ong_donor, { through: "State_Ong_donor" });
Ong_donor.belongsToMany(State, { through: "State_Ong_donor" });

// State.hasMany(Campaign);
// Campaign.belongsTo(State);

Campaign.belongsToMany(State, { through: "Campaign_State" });
State.belongsToMany(Campaign, { through: "Campaign_State" });

module.exports = {
  ...database.models,
  conn: database,
};
