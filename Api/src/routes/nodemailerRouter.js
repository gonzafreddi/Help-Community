const { Router } = require("express");
const {
  postNodemailerHandler,
  postMailingHandler,
} = require("../handlers/nodemailerHandler");

const nodemailerRouter = Router();

// Para mail de confirmación de registro.
nodemailerRouter.post("/", postNodemailerHandler);

// Para envío masivo de emails.
nodemailerRouter.post("/mailing", postMailingHandler);

module.exports = nodemailerRouter;
