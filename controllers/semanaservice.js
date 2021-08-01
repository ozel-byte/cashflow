const { Sequelize, Op } = require('sequelize');
const FlujoDeEfectivo = require('../models/flujoEfectivoDAO');
const semana = require('../models/semana');


const getSemanaReporte = async (requere,res) => {
 
    let aux = [];
    let objectofinal = [];
let response =  await semana.findAll({
        attributes:[[Sequelize.fn('DISTINCT', Sequelize.col('descripcion')), 'descripcion']],
    })
    let descripcionarreglo = [];
    for(const item of response){
        descripcionarreglo.push(item.descripcion)
    }
    res.send(await datosSemanas(descripcionarreglo));
    
}

async  function datosSemanas(response){
  
     
        let des = "";
        let auxdescripcion = "";
        let objetofinal = [];
    for (const iterator of response) {
        let aux = [];
        auxdescripcion = iterator;

         for(let i=1; i<=4; i++){
             
            let item = await semana.findAll({
                attributes:['id','descripcion','numeroSemana','monto','mes','tipo'],
                    where:{
                        descripcion: iterator,
                        numeroSemana: i
                    }
                });
            if(item.length> 0){
                des = item[0].descripcion;
                if(item[0].numeroSemana == null){
                    aux.push({
                        descripcion: item[0].descripcion,
                        numeroSemana: 0
                    })
                }else{
            
                    if(auxdescripcion === item[0].descripcion){
                        console.log(auxdescripcion +"==="+item[0].descripcion)
                        aux.push({
                            descripcion: item[0].descripcion,
                            numeroSemana: item[0].numeroSemana,
                            monto: item[0].monto,
                            tipo: item[0].tipo,
                            mes: item[0].mes
                        });
                        console.log(aux);
                    }else{
                        aux.push({
                            descripcion: "",
                            numeroSemana: 0
                        });
                    }
        
                }
            }else{
               
            }
         }
            objetofinal.push({
                descripcion: des,
                semanas: aux
            });

    }
  return objetofinal;
}

module.exports = {
    getSemanaReporte
};