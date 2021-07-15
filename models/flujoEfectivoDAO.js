const {Model,DataTypes} = require('sequelize');
const sequelize = require('../DATABASE/db');

class FlujoDeEfectivo extends Model{}

FlujoDeEfectivo.init({
    idFlujoEfectivo: {
        primaryKey: true,
        type: DataTypes.STRING
    },
    tipoFlujo: DataTypes.STRING,
    fecha: DataTypes.STRING,
    idCategoria: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    cantidad: DataTypes.DOUBLE
},
{
    sequelize,
    modelName: 'flujoEfectivo',
    freezeTableName: true
});

module.exports = FlujoDeEfectivo;




//git add
//git add .
//git commit -m "comentario"
//git push -u origin main
//git pull