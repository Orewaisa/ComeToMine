const express = require('express');
const dataPage = express.Router();
const dataController = require('../controllers/data-post.js');

const setUserToken = new dataController();

dataPage.post('/data-base', (req, res) => {
    try {
    setUserToken.setToken(req, res);
    } catch(err) {
        console.log(err);
        res.json(err);
    }
});

module.exports = dataPage;