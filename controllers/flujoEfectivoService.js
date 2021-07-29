const flujoEfectivo = require('../models/flujoEfectivoDAO');
const {v4: uuidv4} = require('uuid');

const addFlujoEfectivo = (req, res) => {
    let uuiTipoFlujo = uuidv4();
    flujoEfectivo.create({
        idFlujoEfectivo: uuiTipoFlujo,
        tipoFlujo: req.body.tipoFlujo,
        fecha: req.body.fecha,
        idCategoria: req.body.idCategoria,
        descripcion: req.body.descripcion,
        cantidad: req.body.cantidad
    }).then(data =>{
        console.log("Agregado el flujo de efectivo");
        res.send("se creo el flujo de dinero")
    }).catch(e =>{
        res.send("Fallo add flujo de dinero")
    })
}

const getFlujoEfectivo = (req, res) => {
    flujoEfectivo.findAll({
        attributes: ['idFlujoEfectivo', 'tipoFlujo', 'fecha', 'idCategoria', 'descripcion', 'cantidad']
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