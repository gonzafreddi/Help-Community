const { Router } = require('express');
const express = require('express');


const ong_donanteRouter = require('./ong_donante');

const router = Router();

router.use('/ong_donante', ong_donanteRouter);

router.use(express.json());

module.exports = router;
