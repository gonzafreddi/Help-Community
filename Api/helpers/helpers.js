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
      created: true,
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

const stringAll = (Teams) => {
  const teamsNames = Teams.map((team) => team.name);
  return teamsNames.join(", ");
};

module.exports = {
  cleanArrayCampaignApi,
  cleanArrayCampaignDB,
  stringAll,
};
