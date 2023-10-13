const { getAllbuys, postbuys, getAllBuysForUser } = require("../controllers/buysController");
const getsUserByEmail = require("../controllers/getUserByEmail")




  const getbuysHandler = async (req, res) => {
    try {
      const result = await getAllbuys()
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
const getBuysForUserHandler = async(req, res)=>{
  try {
    const email = req.params.email
    console.log(email, "buscar compra de usueario")
    const userId = await  getsUserByEmail(email)
    console.log(userId, "id del usuario")
    const result = await getAllBuysForUser(userId)
    console.log(result)
    res.status(200).send(result)
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = { getbuysHandler,getBuysForUserHandler };
  // const postbuysHandler = async (req, res) => {
  //   const {
  //     productId,
  //     userId,
  //     buyOut,
  //     totalAmount,
  //   } = req.body;
  
  //   try {
  //     await postbuys(productId, userId, buyOut, totalAmount,);

  //     res.status(200).json(`The Buy was successfully created`);
  //   } catch (error) {
  //     console.log(error)
  //     res.status(400).json({ error: error.message });
  //   }
  // };

  
  