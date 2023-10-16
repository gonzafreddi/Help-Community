const transporter = require("../config/nodemailer");

const emailBuyConfirmation = async (emailUser, items) => {
  console.log("EMAIL_NODEMAILER", emailUser);
  console.log("ITEMS_NODEMAILER", items);
  await transporter.sendMail({
    from: "message sent from <helpcommunityarg@gmail.com>",
    to: emailUser,
    subject: `El producto "${items[0].title}" ya es tuyo!!`,
    html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
        <p style="font-size: 18px;">Estimado Cliente,</p>
        <p style="font-size: 16px;">Su compra ha sido procesada con éxito.</p>
        <p style="font-size: 16px;">Detalles de la compra:</p>
        <ul>
          <li style="font-size: 14px;">Producto: ${items[0].title}</li>
          <li style="font-size: 14px;">Cantidad: ${items[0].quantity}</li>
          <li style="font-size: 14px;">Precio por unidad: $${
            items[0].unit_price
          }</li>
          <li style="font-size: 14px;">Total Compra: $${
            items[0].unit_price * items[0].quantity
          }</li>
        </ul>
        <p style="font-size: 16px;">La compra ha sido debitada exitosamente de su cuenta.</p>
        <p style="font-size: 16px;">Lo saluda atentamente el equipo de Help Community Argentina.</p>
      </div>
    `,
  });
};

module.exports = emailBuyConfirmation;
