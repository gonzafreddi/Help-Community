const { Router } = require('express');
const { Ong_donor } = require('../db');
const express = require('express');

const router = Router();

router.use(express.json());

router.post("/", async (req, res) => {
    let {
     name,
     cuit,
     adddres,
     email,
     webSite,
     image,
     userType
    } = req.body
    
    try{
    await Ong_donor.create({
        name,
        cuit,
        adddres,
        email,
        webSite,
        image,
        userType
    })
           
    res.status(200).send("Usuario created succesfully!")}
    catch (error) {
        res.status(400).json({ error: error.message });
      }});


module.exports = router;