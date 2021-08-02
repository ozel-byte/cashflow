const express = require('express');
const router = express.Router();
const CategoriaService = require('../controllers/CategoriaService');
 router.post('/categoriaAdd',CategoriaService.addCategoria);
router.get('/getCategorias',CategoriaService.getCategoria);
router.put('/updateCategoria',CategoriaService.updateCategoria);


module.exports = router;