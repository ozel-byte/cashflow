const categoria = require('../models/CategoriaDAO');
const {v4: uuidv4} = require('uuid');


const addCategoria = (req,res) => {
    let uuiCategoria = uuidv4();
    console.log(req.query.categoria + "c")
   console.log(req.body.categoria);
   console.log(req.body.subCategoria);
    categoria.create({
        idCategoria: uuiCategoria,
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
    categoria.findAll({
        attributes: ['idCategoria','clasificacion','categoria','subCategoria']
    }).then(data => {
        res.send(data)
    }).catch(e => {
        res.send("no hay nada")
    })
}


module.exports = {
    addCategoria,
    getCategoria
};
