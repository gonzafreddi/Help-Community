const axios = require("axios");
const { Campaign, Category, Donation, Ong_donor, State } = require("../db");
const { Op } = require("sequelize");
/* const {
  cleanArrayApi,
  cleanArrayDB,
  stringAllTeams,
} = require("../helpers/helpers"); */
const ong = require("../../dataApi/ong");

const getAllCampaign = async function () {
  const campaign = await Campaign.findAll();
  console.log(campaign);
  if (campaign.length) {
    /* const result = await Campaign.findAll({
      include: {
        model: Ong_donor,
        attributes: ["StateId"],
        through: { attributes: [] }, //Esto excluye el through model, que traía por default la tabla "Drivers_Teams".
      }, //Devuelve un array de objetos, si se quiere mostrar solo como un objeto, hay que hacer un map.
    });
 */
    return campaign;
  }
  getAllCampaignsDB();
};

const getCampaignByName = async function (name) {
  if (name) {
    //Insensitve Case
    const rawArrayDB = await Drivers.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      include: {
        model: Teams,
        attributes: ["name"],
        through: { attributes: [] },
      },
    });
    const dataBaseDrivers = cleanArrayDB(rawArrayDB);
    const rawArrayApi = (await axios.get(`http://localhost:5000/drivers`)).data;
    const driversApi = cleanArrayApi(rawArrayApi);
    const filteredApi = driversApi.filter((driver) => {
      return driver.name.toLowerCase().includes(name.toLowerCase()); // Busqueda inexacta
    });
    if (filteredApi.length > 0 || dataBaseDrivers.length > 0)
      return [...filteredApi, ...dataBaseDrivers].slice(0, 15);
    else throw new Error("Driver name not found");
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

module.exports = {
  getAllCampaign,
  getCampaignByName,
};
