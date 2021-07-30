const flujoEfectivo = require('../models/flujoEfectivoDAO');


const addFlujoEfectivo = (req, res) => {
    flujoEfectivo.create({
        tipoFlujo: req.body.tipoFlujo,
        fecha: req.body.fecha,
        descripcion: req.body.descripcion,
        cantidad: req.body.cantidad,
        numeroSemana: req.body.numeroSemana,
        categoriumIdCategoria: req.body.idCategoria
    }).then(data =>{
        console.log("Agregado el flujo de efectivo");
        res.send("se creo el flujo de dinero")
    }).catch(e =>{
        res.send("Fallo add flujo de dinero")
    })
}

const getFlujoEfectivo = (req, res) => {
    flujoEfectivo.findAll({
        attributes: ['idFlujoEfectivo', 'tipoFlujo', 'fecha','descripcion', 'cantidad','numeroSemana'],
        include: [
            {
                association: flujoEfectivo.Categoria
            }
        ]
    }).then(data => {
        res.send(data)
    }).catch(e => {
        res.send("sin datos")
    })
}


module.exports = {
    addFlujoEfectivo,
    getFlujoEfectivo
};