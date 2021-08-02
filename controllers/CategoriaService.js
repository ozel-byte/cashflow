
const sequelize = require('../DATABASE/db');
const categoria = require('../models/CategoriaDAO');
const {QueryTypes} = require('sequelize');
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


const updateCategoria = (req,res) => {
    console.log(req.body.clasificacion);

    let query = "UPDATE categoria SET clasificacion = '"+req.body.clasificacion+"', categoria='"+req.body.categoria+"', subCategoria='"+req.body.subCategoria+"' where idCategoria='"+req.body.idCategoria+"'";
    sequelize.query(query,{ type: QueryTypes.SELECT }).then(data =>{
        res.send({
            find: "true",
            body: "se actualizo correctamente"
        })
    }).catch(e => {
        res.send({
            find: "false",
            body: "error no se pudo actualizar"
        })
    })
}


module.exports = {
    addCategoria,
    getCategoria,
    updateCategoria
};
