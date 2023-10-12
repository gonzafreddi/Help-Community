const axios = require("axios");
const { Campaign, Category, Buy, State, Review } = require("../db");


const getAllreviews = async function () {
    const rawArrayDB = await Review.findAll();
      return rawArrayDB;
  };

const postreviews = async (
    rating,
    comment,    
) => {
  const newReview = await Review.create({
    rating,
    comment,    
    });
  
  return newReview;
};

const updatereviews = async (id, rating, comment) => {
    const review = await Review.findByPk(id);
    
    if (!review) {
      throw new Error(`Review with ID: ${id} not found`);
    }
  
    review.rating = rating;
    review.comment = comment;
      
    await review.save();
  
    return review;
  };

module.exports = {
  getAllreviews,
  postreviews,
  updatereviews,
};