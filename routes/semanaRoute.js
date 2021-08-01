const express = require('express');
const router = express.Router();
const Semanaservice = require('../controllers/semanaservice');

router.get('/getSemana', Semanaservice.getSemanaReporte);
router.get('/getpdf',Semanaservice.getPdf)


module.exports = router;