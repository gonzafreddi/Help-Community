const axios = require("axios");
const { Campaign, Category, Donation, Ong_donor, State } = require("../db");
const { Op } = require("sequelize");

const ong = require("../../dataApi/ong");

const getAllCampaign = async function () {
  const campaign = await Campaign.findAll();
  if (campaign.length) {
    /* const result = await Campaign.findAll({
      include: {
        model: Ong_donor,
        attributes: ["StateId"],
        through: { attributes: [] }, 
      }, //Devuelve un array de objetos, si se quiere mostrar solo como un objeto, hay que hacer un map.
    });
 */
    return campaign;
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
        model: Categories,
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
          description: campaign.description,
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

const postCampaign = async (req, res) => {
  const { name, short_description, large_description, image, startDate, endDate, finalAmount, state } = req.body; 

  if (!name || !description || !startDate || !endDate || !finalAmount) {
    return res.status(400).json({ error: "Require all data" });
  }

  const campaigns = await Campaign.create({
      name,
      short_description,
      large_description,
      image,
      startDate,
      endDate,
      finalAmount,
      state
  });

  return campaigns;
};

module.exports = {
  getAllCampaign,
  getCampaignByName,
  postCampaign
};