const indicadoresDAO = require('../models/indicadoresFinancierosDAO');


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
const getMesIndicadores = (req,res) => {
    indicadoresDAO.findAll({
        attributes: ['idIndicadoresDinero','tipoIndicador','numeroSemana','razonSocial', 'monto','fecha','mes'],
        where: {
            mes: req.body.mes
        }
    }).then(data => {
        res.send(data);
    }).catch(e => {
        res.send("error")
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
    getMesIndicadores
}