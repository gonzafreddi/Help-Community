const axios = require("axios");
const { Campaign, Category, Donation, Ong_donor, State } = require("../db");
const { Op } = require("sequelize");
const state = require("../../dataApi/state");

const getAllState = async function () {
    
    //console.log(state[0].name);
    //const result = state.map((s)=> s.name);
    const result = state.map((state)=>
    State.findOrCreate({
      where: {
            name: state.name
        }}));
      
      const result1 = await State.findAll()

      return result1;
  
    };

  module.exports = {
    getAllState
  };