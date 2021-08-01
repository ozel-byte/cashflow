
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

const getCategoria = async (req,res) => {

   let response = await categoria.findAll({
        attributes: ['idCategoria','clasificacion','categoria','subCategoria']
    });
    if(response.length>0){
        res.send({
            find: "true",
            body: response
        });
    }else{
        res.send({
            find: "false",
            body: []
        });
    }
}


module.exports = {
    addCategoria,
    getCategoria
};
