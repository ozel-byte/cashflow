const semana = require('../models/semana');


const getSemanaReporte = async (requere,res) => {
    
  let response = await  semana.findAll({
        attributes:['id','descripcion','numeroSemana','monto','mes','tipo']
    });

    if (response.length>0) {
        res.send({
            find: "true",
            body:response
        });
    }else{
        res.send({
            find: "false",
            body: []
        })
    }
    
}

module.exports = {
    getSemanaReporte
};