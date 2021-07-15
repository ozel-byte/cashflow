const indicadoresDAO = require('../models/indicadoresFinancierosDAO');
const {v4: uuidv4} = require('uuid');

const addIndicador = (req, res) => {
    let uuiIndicador = uuidv4();

    indicadoresDAO.create({
        idIndicadoresDinero: uuiIndicador,
        tipoIndicador: req.body.tipoIndicador,
        numeroSemana: req.body.numeroSemana,
        razonSocial: req.body.razonSocial,
        monto: req.body.monto
    }).then(data => {
        res.send("Se agrego el indicaodr");
    }).catch(e => {
        res.send("No se pudo agregar el indicador");
    })
}

const getIndicadores = (req, res) => {
    indicadoresDAO.findAll({
        attributes: ['numeroSemana', 'monto']
    }).then(data => {
        res.send({
            indicadores: data,
            status: true
        })
    }).catch(e => {
        res.send({
            indicadores: "No hay datos",
            status: false 
        })
    })
}

module.exports = {
    addIndicador,
    getIndicadores
}