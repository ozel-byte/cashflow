const semana = require('../models/semana');


const getSemanaReporte = async (requere,res) => {
    
  let response = await  semana.findAll({
        attributes:['id','descripcion','numeroSemana','monto','mes','tipo']
    });

    if (response.length>0) {
        res.send(response);
    }else{
        res.send("error")
    }
    
}

module.exports = {
    getSemanaReporte
};