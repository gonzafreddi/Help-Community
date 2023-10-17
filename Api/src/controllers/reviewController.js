const axios = require("axios");
const { Campaign, Category, Buy, State, Review, User } = require("../db");
const getUserByEmail = require("../controllers/getUserByEmail");

const getAllreviews = async function () {
    const rawArrayDB = await Review.findAll({
      include: [
        {
          model: User,
          attributes: [  
            "name",   
          ]
        }
      ],
    })
    return rawArrayDB;
  };

const postreviews = async (
      ProductId,
      comment,
      rating,
      emailUser,
      
      
) => {
  //console.log(emailUser)

  const userId = await getUserByEmail(emailUser)
  //let userUuId = userId
  console.log(userId)

  const newReview = await Review.create({
      ProductId,
      comment,
      rating,
      userId,     
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

const getUserreviews = async (req, res) => {
    try {
      const userId = req.params.userId;
      const reviews = await Review.findAll({ where: { userId: userId } });
      res.json(reviews);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

module.exports = {
  getAllreviews,
  postreviews,
  updatereviews,
  getUserreviews,
};