const { getAllreviews, postreviews, updatereviews } = require("../controllers/reviewController");
  
  const getreviewHandler = async (req, res) => {
   
    try {
      const result = await getAllreviews();
  
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  const postreviewHandler = async (req, res) => {
    const {
      rating,
      comment,      
    } = req.body;
  
    try {
      await postreviews(rating, comment);

      res.status(200).json(`The Review was successfully created`);
    } catch (error) {
      console.log(error)
      res.status(400).json({ error: error.message });
    }
  };

  const putreviewHandler = async (req, res) => {
    const { id } = req.params;
    const { rating, comment } = req.body;
  
    try {
      await updatereviews(id, rating, comment);
  
      res.status(200).json(`The review was successfully updated`);
    } catch (error) {
      console.log(error)
      res.status(400).json({ error: error.message });
    }
  };  
  
  module.exports = { getreviewHandler, postreviewHandler, putreviewHandler };