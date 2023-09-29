const axios = require("axios");
const { Campaign, Category, Donation, Ong_donor, State } = require("../db");
const { Op } = require("sequelize");
const categoria = require("../../dataApi/categoria");

const getAllCategory = async function () {
    
    //console.log(state[0].name);
    //const result = state.map((s)=> s.name);
    const result = categoria.map((categoria)=>
    Category.findOrCreate({
      where: {
            name: categoria.name
        }}))

    return result;
  
    };

  module.exports = {
    getAllCategory
  };