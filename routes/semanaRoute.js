const express = require('express');
const router = express.Router();
const Semanaservice = require('../controllers/semanaservice');

router.get('/getSemana', Semanaservice.getSemanaReporte);



module.exports = router;