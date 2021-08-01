const coneccion = require('../DATABASE/db');
const flujoEfectivo = require('../models/flujoEfectivoDAO');
const Semana = require('../models/semana');
const {QueryTypes} = require('sequelize');

const addFlujoEfectivo = async (req, res) => {
  Semana.create({
        descripcion: req.body.descripcion,
        numeroSemana: req.body.numeroSemana,
        monto: req.body.cantidad,
        mes:req.body.mes,
        tipo: req.body.tipoFlujo,
    }).then(data => {
        flujoEfectivo.create({
            mes:req.body.mes,
            fecha: req.body.fecha,
            tipo: req.body.tipoFlujo,
            descripcion : req.body.descripcion,
            categoriumIdCategoria: req.body.idCategoria,
            SemanaId: data.id
        }).then(data => {
            res.send("se creo el flujo de dinero")
        })
    }).catch(e => {
        res.send("Fallo add flujo de dinero")
    })

   }


const getFlujoEfectivo = async (req, res) => {


    // coneccion.query("select * from Categoria", (data) => {
    //     res.send(data);
    // })

    // let objectofinal = [];

    // let result = await Semana.findAll({
    //     attributes: ['descripcion'],
    //     group: "descripcion"
    // });

    // if(result.length> 0){
    //     let query2 = "select IFNULL(Sum(s.monto),0) as monto,IFNULL(s.descripcion,'') as descripcion from Semana s Inner join flujoEfectivo f on f.SemanaId=s.id where s.descripcion = '"+result.descripcion+"' AND s.numeroSemana='"+1+"'";

    //     sequelize.query(query2,{ type: QueryTypes.SELECT }).then((row) => {
    //         res.send(row)
    //     })
    // }

    // console.log("segundo en ejecutar")
}

function cargarJson(){
    let jsonArreglo = [];
    flujoEfectivo.findAll({
            
    })
}

 async function consulta() {
    let query1 = "select Distinct(s.descripcion) from Semana s";
    let objectofinal = [];
    let response  = await sequelize.query(query1,{ type: QueryTypes.SELECT });
    
     response.forEach( async (element) =>  {
      
          let objetoSemanasDescripcion = [];
          for (let x = 1; x <= 4; x++) {
              let semana = x;
              let query2 = "select IFNULL(Sum(s.monto),0) as monto,IFNULL(s.descripcion,'') as descripcion from Semana s Inner join flujoEfectivo f on f.SemanaId=s.id where s.descripcion = '"+element.descripcion+"' AND s.numeroSemana='"+semana+"'";
              let response2 = await sequelize.query(query2, {type: QueryTypes.SELECT});
              response2.forEach( item => {
                let objec = {
                    descripcion: item.descripcion,
                    numeroSemana: semana,
                    monto: item.monto
                }
                objetoSemanasDescripcion.push(objec);
              
            });
             
         }
         console.log("llego aqui pero")
         objectofinal.push({
             descripcion: element.descripcion,
             semanas: objetoSemanasDescripcion
          });
      });

      return objectofinal;
}

module.exports = {
   addFlujoEfectivo,
    getFlujoEfectivo
};