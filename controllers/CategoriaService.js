
const {v4: uuidv4} = require('uuid');
const categoria = require('../models/CategoriaDAO')
const addCategoria = (req,res) => {
    categoria.create({
        clasificacion: req.body.clasificacion,
        categoria: req.body.categoria,
        subCategoria: req.body.subCategoria
    }).then(data => {
        console.log("se creo correctamente");
        res.send("se creo la categoria")
    }).catch(e => {
        res.send("No se pudo crear la categoria")
    })
    
}

const getCategoria = (req,res) => {
    coneccion.query("select * from categoria", (data) => {
        res.send(data);
    })
}


module.exports = {
    addCategoria,
    getCategoria
};
