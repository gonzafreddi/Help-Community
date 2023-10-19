const { Category, State } = require("../src/db");
const getCategoryId = async (categoryName) => {
  const category = await Category.findOne({
    where: { name: categoryName },
  });
  if (!category) {
    throw new Error(`Category "${categoryName}" not found`);
  }

  return category.id;
};
const getStateId = async (stateName) => {
  const state = await State.findOne({
    where: { name: stateName },
  });
  if (!state) {
    throw new Error(`Category "${stateName}" not found`);
  }

  return state.id;
};

const cleanArrayCampaignDB = (arr) =>
  arr.map((campaign) => {
    return {
      id: campaign.id,
      name: campaign.name,
      short_description: campaign.short_description,
      long_description: campaign.long_description,
      image: campaign.image,
      startDate: campaign.startDate,
      endDate: campaign.endDate,
      finalAmount: campaign.finalAmount,
      state: stringAll(campaign.States),
      category: stringAll(campaign.Categories),
      ong: campaign.ong,
      borradoCondicional: campaign.state,
      /* created: true, */
    };
  });

const cleanArrayCampaignApi = function (ongs) {
  const result = ongs.flatMap((ong) =>
    ong.campañas.map((campaign) => {
      return {
        id: campaign.id,
        name: campaign.name,
        short_description: campaign.short_description,
        long_description: campaign.long_description,
        image: campaign.image,
        startDate: campaign.startDate,
        endDate: campaign.endDate,
        finalAmount: campaign.finalAmount,
        state: campaign.province,
        category: campaign.category,
        ong: ong.name,
        borradoCondicional: campaign.state,
        created: false,
      };
    })
  );
  return result;
};

const stringAll = (Elements) => {
  const names = Elements.map((elem) => elem.name);
  return names.join(", ");
};

module.exports = {
  cleanArrayCampaignApi,
  cleanArrayCampaignDB,
  stringAll,
  getCategoryId,
  getStateId,
};
