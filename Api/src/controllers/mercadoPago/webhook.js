// * La información que envía mercado pago, la envía por query
const mercadopago = require("mercadopago");
const getUserByEmail = require("../getUserByEmail");
const productStockController = require("../productStockController");
const createBuys = require("../createBuys");
require("dotenv").config();
const emailBuyConfirmation = require("../emailBuyConfirmation");

// crear funcion para crear la compra en base al id del usuario
//llamar a la funcion en webhook y pasarle all data que contiene el comprobante y el id del usuario
//crear rutas get para poder traer las compras que coreespondan a cada usuario en base a su id que lo sacas con la funcion getUserByEmail
// crear ruta get de todas las compras de todos los usuarios para que el admin pueda ver todas las transacciones

const receiveWebhook = async (req, res) => {
  const payment = req.query;
  console.log("PAYMENT", payment);
  const emailUser = req.query.email;
  console.log("EMAIL", emailUser);
  const userUuId = await getUserByEmail(emailUser);
  console.log("USER_UUID", userUuId);

  try {
    if (payment.type === "payment") {
      const data = await mercadopago.payment.findById(payment["data.id"]);
      const orderId = await data.body.order.id;
      const items = await data.response.additional_info.items;
      const payer = await data.response.payer;
      const transaction = await data.response.transaction_details;
      const status = await data.response.status;
      const statusDetail = await data.response.status_detail;

      let allData = [{ items, payer, transaction, status, statusDetail }];

      allData = [[...allData], [userUuId]];
      // crear compra function
      // const function almacenar(allData) {
      //     llamar a la funcion de crear compra
      // }

      console.log("Esto es ALLDATA", allData);
      console.log("STATUS COMPRA", status);
      console.log("ITEMS", items);
      createBuys(allData);
      if (status === "approved") {
        productStockController(items);
      }
      await emailBuyConfirmation(emailUser, items);
      res.sendStatus(204);
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = receiveWebhook;
