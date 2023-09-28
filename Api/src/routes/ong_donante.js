const { Router } = require('express');
const { Ong_donante } = require('../db');
const express = require('express');

const router = Router();

router.use(express.json());

router.post("/", async (req, res) => {
    let {
     nombre,
     cuit,
     provincia,
     domicilio,
     email,
     páginaweb,
     imagen
    } = req.body
    
    try{
    await Ong_donante.create({
        nombre,
        cuit,
        provincia,
        domicilio,
        email,
        páginaweb,
        imagen
    })
           
    res.status(200).send("Usuario created succesfully!")}
    catch (error) {
        res.status(400).json({ error: error.message });
      }});


module.exports = router;