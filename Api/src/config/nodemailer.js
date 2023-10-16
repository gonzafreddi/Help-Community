const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "helpcommunityarg@gmail.com",
    pass: "dhzf urap bbws lyny",
  },
});

transporter
  .verify()
  .then(() => console.log("transport creado con exito"))
  .catch((error) => console.error(error));

module.exports = transporter;
