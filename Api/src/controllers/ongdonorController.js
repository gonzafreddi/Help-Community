const axios = require("axios");
const { Ong_donor } = require("../db");

const postOng_donor = async (req, res) => {
    const { name,cuit,adddres,email,StateId,webSite,image,userType } = req.body; 
  
    if (!name || !email) {
      return res.status(400).json({ error: "Require all data" });
    }
  
    const ong_donors = await Ong_donor.create({
        name,
        cuit,
        adddres,
        email,
        StateId,
        webSite,
        image,
        userType
    });
  
    return ong_donors;
  };

  module.exports = {
    postOng_donor,
    };