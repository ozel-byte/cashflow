const express = require('express');
const route = express.Router();
const indicadoresFinancierosService = require('../controllers/indicadoresFinancierosService');

route.post('/addIndicadores', indicadoresFinancierosService.addIndicador);
route.get('/getIndicadores', indicadoresFinancierosService.getIndicadores);
route.post('/getMesIndicador',indicadoresFinancierosService.getMesIndicadores);

module.exports = route;