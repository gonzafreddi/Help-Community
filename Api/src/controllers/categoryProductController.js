const axios = require("axios");
const { Campaign, Category, Donation, Ong_donor, State, CategoryProduct } = require("../db");
const { Op } = require("sequelize");
const productCategory = require("../../dataApi/productCategory");


const getAllCategoryProduct = async function () {
    
    //console.log("Entre a categoryProductController");
    //const result = state.map((s)=> s.name);
    const result = productCategory.map((nameCategory)=>
    CategoryProduct.findOrCreate({
      where: {
            name: nameCategory
        }}))

      const result1 = await CategoryProduct.findAll()
      return result1;    
    
    };

  module.exports = {
    getAllCategoryProduct
  };