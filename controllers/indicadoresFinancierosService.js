
const { Sequelize } = require('sequelize');
const indicadoresDAO = require('../models/indicadoresFinancierosDAO');
const Semana = require('../models/semana')
const addIndicador = (req, res) => {
    indicadoresDAO.create({
        mes: req.body.mes,
        tipoIndicador: req.body.tipoIndicador,
        numeroSemana: req.body.numeroSemana,
        razonSocial: req.body.razonSocial,
        monto: req.body.monto,
        fecha: req.body.fecha
    }).then(data => {
        res.send("Se agrego el indicaodr");
    }).catch(e => {
        res.send("No se pudo agregar el indicador");
    })
}

const getCobrar = (req,res) => {
 
   indicadoresDAO.findAll({
        attributes: [ 
            [Sequelize.fn('DISTINCT', Sequelize.col('razonSocial')), 'item']
        ]
    }).then (data => {
            res.send(data);
    }).catch(e => {

    })
    

}

const getRazonSocialArraySemanas = (req,res) => {
    indicadoresDAO.findAll({
        where: {
            razonSocial: req.body.razonSocial,
        },
        attributes: ['numeroSemana','monto'],
        order: [
            ["numeroSemana", "ASC"]
        ]
        
    }).then(data => {
        res.send(data);
    }).catch(e => {

    })
}
const getIndicadores = (req, res) => {
    indicadoresDAO.findAll({
        attributes: ['idIndicadoresDinero','tipoIndicador','numeroSemana','razonSocial', 'monto','fecha']
    }).then(data => {
        res.send(data)
    }).catch(e => {
        res.send("no hay datos")
    })
}

module.exports = {
    addIndicador,
    getIndicadores,
    getIndicadores,
    getCobrar,
    getRazonSocialArraySemanas
}