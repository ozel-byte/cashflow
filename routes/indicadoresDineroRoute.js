const express = require('express');
const route = express.Router();
const indicadoresFinancierosService = require('../controllers/indicadoresFinancierosService');

route.get('/');

module.exports = route;