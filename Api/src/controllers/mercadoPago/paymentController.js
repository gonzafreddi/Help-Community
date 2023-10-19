const mercadopago = require("mercadopago");
require("dotenv").config();

const { ACCESS_TOKEN } = process.env;
// * Configurar mercado pago
// esto vendria a ser un post de creae una orden
const createOrder = async (req, res) => {
  mercadopago.configure({
    access_token:
      "TEST-6850757546672488-100711-50177e634a355fb71db241599efdb0f3-1503945548",
  });
  const pictureUrl = req.body[0].image;
  const products = req.body[0];
  let email;
  console.log(req.body);
  let items = [];
  if (products.length >= 1) {
    for (const prod of products) {
      const pictureUrl = prod.product.image;
      const item = {
        title: prod.product.name,
        id: prod.product.id,
        unit_price: prod.product.price,
        currency_id: "ARS",
        quantity: prod.product.quantity || 1,
        picture_url: pictureUrl,
      };
      items.push(item);
    }
    email = req.body[1].email;
    console.log(email);
  } else {
    items = [
      {
        title: req.body[0].name,
        id: req.body[0].id,
        unit_price: req.body[0].price,
        currency_id: "ARS",
        quantity: req.body.quantity || 1,
        userEmail: req.body[0].email,
        picture_url: pictureUrl,
      },
    ];
    email = req.body[0].email;
  }
  console.log(items);
  const result = await mercadopago.preferences.create({
    items: items,

    // ? Darle el control a mercado pago...
    back_urls: {
      success: "https://help-community-production-ad63.up.railway.app/payment/success",
      failure: "https://help-community-production-ad63.up.railway.app/payment/failure",
      pending: "https://help-community-production-ad63.up.railway.app/payment/pending", //cuando el usuario no ha pagado
    },

    notification_url: `https://help-community-production-ad63.up.railway.app/payment/webhook?email=${email}`, 
    
    // ? Perdon Juan, copie mi puerto arriba del tuyo 
    // ? Perdon Juan, copie mi puerto arriba del tuyo 
    // ? Perdon Juan, copie mi puerto arriba del tuyo 
    // notification_url: `https://pmcmwdd1-3001.brs.devtunnels.ms/payment/webhook?email=${email}`, // Puerto de gonzalo freddi si quieren probar cambien la url con su puerto https
    // notification_url: `https://312d05tj-3001.brs.devtunnels.ms/payment/webhook?email=${email}`, // Puerto de Lucas Caruso, idem Gonzalo Freddi ;)

  });

  res.send(result.body);
};

module.exports = createOrder;
