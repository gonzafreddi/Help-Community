const transporter = require("../config/nodemailer");

const emailBuyConfirmation = async (emailUser, items) => {
  console.log("EMAIL_NODEMAILER", emailUser);
  console.log("ITEMS_NODEMAILER", items);
  // Crear una lista de detalles de compra para cada producto
  const productDetails = items.map((item) => {
    return `
      <ul>
        <li style="font-size: 14px;">Producto: ${item.title}</li>
        <li style="font-size: 14px;">Cantidad: ${item.quantity}</li>
        <li style="font-size: 14px;">Precio por unidad: $${item.unit_price}</li>
        <li style="font-size: 14px;">Total parcial por Producto: $${
          item.unit_price * item.quantity
        }</li>
        <li style="font-size: 14px;">Imagen del Producto: <img src="${
          item.picture_url
        }" alt="${item.title}" width="150"></li>
      </ul>
    `;
  });

  // Unir los detalles de compra en un solo bloque HTML
  const purchaseDetailsHTML = productDetails.join("<br><br>");

  await transporter.sendMail({
    from: "message sent from <helpcommunityarg@gmail.com>",
    to: emailUser,
    subject: `Su compra en Help Community Argentina`,
    html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
        <p style="font-size: 18px;">Estimado Cliente,</p>
        <p style="font-size: 16px;">Lo saluda atentamente el equipo de Help Community Argentina.</p>
        <p style="font-size: 16px;">Su compra ha sido procesada con éxito.</p>
        <p style="font-size: 16px;">Detalles de la compra:</p>
        ${purchaseDetailsHTML}
        <p style="font-size: 16px;">La compra ha sido debitada exitosamente de su cuenta.</p>
      </div>
    `,
  });
};

module.exports = emailBuyConfirmation;
