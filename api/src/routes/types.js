const express = require('express');
const router = express.Router();
const axios = require('axios');
const { Type } = require('../db');

router.get('', async (req, res, next) => {
    try {
    const typesApi = await axios.get('https://pokeapi.co/api/v2/type')
    const typesArray = await typesApi.data.results;
    
    typesArray.forEach(type => {
        Type.findOrCreate({
            where: {
                name: type.name
            }
        })
    });
    const allTypes = await Type.findAll();
    res.send(allTypes);       
    } catch (e) {
        next(e)
    }
})

module.exports = router;