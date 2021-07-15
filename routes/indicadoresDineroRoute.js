const express = require('express');
const route = express.Router();
const indicadoresFinancierosService = require('../controllers/indicadoresFinancierosService');

route.post('/addIndicadores', indicadoresFinancierosService.addIndicador);
route.get('/getIndicadores', indicadoresFinancierosService.getIndicadores);

module.exports = route;