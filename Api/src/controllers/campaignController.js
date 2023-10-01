const axios = require("axios");
const { Campaign, Categories, Donation, Ong_donor, State } = require("../db");
const { Op } = require("sequelize");

const ong = require("../../dataApi/ong");

const getAllCampaign = async function () {
  const campaign = await Campaign.findAll();
  if (campaign.length) {
    const result = await Campaign.findAll({
      include: {
        model: State,
        attributes: ["name"],
        through: { attributes: [] },
      },
    });
    return result;
  }
  getAllCampaignsDB();
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
      /* include: {
        model: Ong_Donor,
        attributes: ["name"],
        through: { attributes: [] },
      }, */
    });

    if (rawArrayDB.length > 0) return rawArrayDB;
    else throw new Error("Campaign name not found");
  }
};

const getAllCampaignsDB = async function () {
  //const campaign = await Campaign.findAll();

  const result = ong.flatMap((ong) =>
    ong.campañas.map((campaign) =>
      Campaign.findOrCreate({
        where: {
          name: campaign.name,
          short_description: campaign.short_description,
          long_description: campaign.long_description,
          StateId: campaign.StateId,
          image: campaign.image,
          startDate: campaign.startDate,
          endDate: campaign.endDate,
          finalAmount: campaign.finalAmount,
          //CategoryId: campaign,// Agregar relacion Category con su relacion
        },
      })
    )
  );
  return result;
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
  });
  await newCampaign.setState(CategoryId);
  await newCampaign.setStates(StateId);
  await newCampaign.setState(ongDonorId);

  return newCampaign;
};

module.exports = {
  getAllCampaign,
  getCampaignByName,
  postCampaign,
};
