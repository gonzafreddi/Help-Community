const { User } = require("../db");
const transporter = require("../config/nodemailer");

//Mail de confirmación de registro en la página.
const postNodemailerController = async (email) => {
  await transporter.sendMail({
    from: "message sent from <helpcommunityarg@gmail.com>",
    to: email,
    subject: `Te has registrado con éxito`,
    html: `
     <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h1 style="font-size: 24px; color: #007bff;">¡Bienvenido a Help Community Argentina!</h1>
        <p style="font-size: 16px;">Estimado usuario,</p>
        <p style="font-size: 16px;">Tu solicitud de registro ha sido procesada con éxito.</p>
        <p style="font-size: 16px;">Ahora eres parte de nuestra comunidad y puedes disfrutar de todos los beneficios que ofrecemos. ¡Esperamos que tengas una experiencia increíble con nosotros!</p>
        <p style="font-size: 16px;">Si tienes alguna pregunta o necesitas ayuda, no dudes en ponerte en contacto con nuestro equipo de soporte. Estamos aquí para ayudarte.</p>
        <p style="font-size: 16px;">¡Gracias por unirte a nosotros!</p>
      </div>
  
    `,
  });
};

//Mail masivos a usuarios.

const postMailingController = async (subject, message) => {
  try {
    const users = await User.findAll();
    console.log(users);

    for (const user of users) {
      await transporter.sendMail({
        from: "message sent from <helpcommunityarg@gmail.com>",
        to: user.email,
        subject: subject,
        html: message,
      });
      console.log(`Correo enviado a ${user.name} (${user.email})`);
    }

    console.log("Correos electrónicos enviados a todos los usuarios.");
  } catch (error) {
    console.error("Error al enviar correos electrónicos:", error);
  }
};

module.exports = { postNodemailerController, postMailingController };
