const cleanArrayOngdonorDB = (arr) =>
  arr.map((ong_donor) => {
    return {
      id: ong_donor.id,
      name: ong_donor.name,
      cuit: ong_donor.cuit,
      address: ong_donor.address,
      email: ong_donor.email,
      borradoCondicional: ong_donor.user,
      tipoDato: ong_donor.userType,
      state: stringAll(ong_donor.States),
      category: stringAll(ong_donor.Donation),
      ong: stringAll(ong_donor.Campaign),
      created: true,
    };
  });

const cleanArrayOngdonorAPI = function (ongs) {
  const result = ongs.flatMap((ong) =>
    ong.map((ong_donor) => {
      return {
        id: ong_donor.id,
        name: ong_donor.name,
        cuit: ong_donor.cuit,
        address: ong_donor.address,
        email: ong_donor.email,
        borradoCondicional: ong_donor.user,
        tipoDato: ong_donor.userType,
        state: stringAll(ong_donor.States),
        category: stringAll(ong_donor.Donation),
        ong: stringAll(ong_donor.Campaign),
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
  cleanArrayOngdonorAPI,
  cleanArrayOngdonorDB,
  stringAll,
};