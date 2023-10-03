const axios = require("axios");
const { Campaign, Category, Donation, Ong_donor, State } = require("../db");
const { Op } = require("sequelize");

const ong = require("../../dataApi/ong");

const getAllOng_Donor = async function () {
  const rawArrayDB = await Ong_donor.findAll({
    include: [
      {
        model: State,
        attributes: ["name"],
        through: { attributes: [] },
      },
      {
        model: Category,
        attributes: ["name"],
        through: { attributes: [] },
      },
    ],
  });
  const campaignDB = cleanArrayOngdonorDB(rawArrayDB);
  const campaignApi = cleanArrayOngdonorApi(ong);
  return [...campaignDB, ...campaignApi];
};

const getOngDonor_ByName = async function (name) {
  console.log(name);
  if (name) {
    //Insensitve Case
    console.log(name);
    const rawArrayDB = await Ong_donor.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      include: [
        {
          model: State,
          attributes: ["name"],
          through: { attributes: [] },
        },
        {
          model: Category,
          attributes: ["name"],
          through: { attributes: [] },
        },
        {
          model: Ong_donor,
          attributes: ["name"],
          through: { attributes: [] },
        },
      ],
    });

    if (rawArrayDB.length > 0) return rawArrayDB;
    else throw new Error("Ongdonor name not found");
  }
};

const postOng_donor = async (
  name,
  cuit,
  adddres,
  email,
  webSite,
  image,
  userType,
  StateId,
  DonationId,
  CategoryId,
) => {
  const newOng_donor = await Ong_donor.create({
  name,
  cuit,
  adddres,
  email,
  webSite,
  image,
  userType,  
  });
  //await newOng_donor.setCategories(CategoryId);
  //await newOng_donor.setStates(StateId);
  //await newOng_donor.setDonation(DonationId); // Todavia falta hacer el getAllOngDonor()

  return newOng_donor;
};

  module.exports = {
    postOng_donor,
    };