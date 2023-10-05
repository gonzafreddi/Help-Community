const axios = require("axios");
const { Campaign, Category, Donation, Ong_donor, State } = require("../db");
const { Op } = require("sequelize");
const {
  cleanArrayCampaignApi,
  cleanArrayCampaignDB,
} = require("../../helpers/helpers");

const ong = require("../../dataApi/ong");

const getAllCampaign = async function () {
  const rawArrayDB = await Campaign.findAll({
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
      /* {
        model: Ong_donor,
        attributes: ["name"],
        through: { attributes: [] },
      }, */
    ],
  });
  const campaignDB = cleanArrayCampaignDB(rawArrayDB);
  const campaignApi = cleanArrayCampaignApi(ong);
  return [...campaignDB, ...campaignApi];
};

const getCampaignByName = async function (name) {
  console.log(name);
  if (name) {
    //Insensitve Case
    console.log(name);
    const rawArrayDB = await Campaign.findAll({
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
        /* {
          model: Ong_donor,
          attributes: ["name"],
          through: { attributes: [] },
        }, */
      ],
    });

    if (rawArrayDB.length > 0) return rawArrayDB;
    else throw new Error("Campaign name not found");
  }
};

const postCampaign = async (
  name,
  short_description,
  long_description,
  image,
  startDate,
  endDate,
  finalAmount,
  state,
  ong,
  StateId,
  ongDonorId,
  CategoryId
) => {
  const newCampaign = await Campaign.create({
    name,
    short_description,
    long_description,
    image,
    startDate,
    endDate,
    finalAmount,
    state,
    ong,
  });
  await newCampaign.setCategories(CategoryId);
  await newCampaign.setStates(StateId);
  //await newCampaign.setOng_donors(ongDonorId); // Todavia falta hacer el getAllOngDonor()

  return newCampaign;
};

module.exports = {
  getAllCampaign,
  getCampaignByName,
  postCampaign,
};
