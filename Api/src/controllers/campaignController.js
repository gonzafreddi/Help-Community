const { Campaign, Category, State } = require("../db");
const { Op } = require("sequelize");
const {
  cleanArrayCampaignApi,
  cleanArrayCampaignDB,
  getStateId,
  getCategoryId,
} = require("../../helpers/helpers");

const ong = require("../../dataApi/ong");

const getAllCampaign = async function () {
  const campaignsInDB = await Campaign.findAll();
  if (campaignsInDB.length < 33) {
    const rawCampaignApi = ong.flatMap((ong) =>
      ong.campañas.map(async (campaign) => {
        const CategoryId = await getCategoryId(campaign.category);
        const StateId = await getStateId(campaign.province);

        const newCampaign = await Campaign.create({
          name: campaign.name,
          short_description: campaign.short_description,
          long_description: campaign.long_description,
          image: campaign.image,
          startDate: campaign.CBU,
          endDate: campaign.endDate,
          finalAmount: campaign.finalAmount,
          state: true,
          ong: ong.name,
        });
        await newCampaign.setCategories(CategoryId);
        await newCampaign.setStates(StateId);
      })
    );

    await Promise.all(rawCampaignApi);
  }
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
    ],
  });

  const campaignDB = cleanArrayCampaignDB(rawArrayDB);
  return campaignDB;
  //const campaignApi = cleanArrayCampaignApi(ong);
  //return [...campaignDB, ...campaignApi];
};

const getCampaignByName = async function (name) {
  if (name) {
    //Insensitve Case
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
      ],
    });
    const campaignDB = cleanArrayCampaignDB(rawArrayDB);

    const campaignApi = cleanArrayCampaignApi(ong);
    const filteredApi = campaignApi.filter((campaign) => {
      return campaign.name.toLowerCase().includes(name.toLowerCase()); // Busqueda inexacta
    });

    if (filteredApi.length > 0 || campaignDB.length > 0)
      return [...filteredApi, ...campaignDB];
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

  return newCampaign;
};

const putCampaign = async (
  id,
  name,
  short_description,
  long_description,
  image,
  startDate,
  endDate,
  finalAmount,
  ong,
  state,
  StateId,
  CategoryId
) => {
  await Campaign.update(
    {
      name,
      short_description,
      long_description,
      image,
      startDate,
      endDate,
      finalAmount,
      ong,
      state,
      StateId,
      CategoryId,
    },
    {
      where: {
        id,
      },
    }
  );
};

module.exports = {
  getAllCampaign,
  getCampaignByName,
  postCampaign,
  putCampaign,
};
