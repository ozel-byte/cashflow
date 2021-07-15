const express = require('express');
const router = express.Router();
const flujoEfectivoService = require('../controllers/flujoEfectivoService')

router.post('/addFlujoEfectivo', flujoEfectivoService.addFlujoEfectivo);
router.get('/getAllFlujoEfectivo', flujoEfectivoService.getFlujoEfectivo);

module.exports = router;