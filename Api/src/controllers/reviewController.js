const axios = require("axios");
const { Campaign, Category, Buy, State, Review } = require("../db");


const getAllreviews = async function () {
    const rawArrayDB = await Review.findAll();
      return rawArrayDB;
  };

const postreviews = async (
    rating,
    comment,
    date,
) => {
  const newReview = await Review.create({
    rating,
    comment,
    date,
    });
  
  return newReview;
};

module.exports = {
  getAllreviews,
  postreviews,
};