const {Model,DataTypes} = require('sequelize');
const sequelize = require('../DATABASE/db');
const Categoria = require('./CategoriaDAO');
const Semana = require('./semana');



class FlujoDeEfectivo extends Model{}

FlujoDeEfectivo.init({
    idFlujoEfectivo: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    mes: DataTypes.STRING,
    fecha: DataTypes.STRING,
    tipo: DataTypes.STRING,
},
{
    sequelize,
    modelName: 'flujoEfectivo',
    freezeTableName: true,
    
});

FlujoDeEfectivo.Categoria = FlujoDeEfectivo.belongsTo(Categoria);
FlujoDeEfectivo.Semana = FlujoDeEfectivo.belongsTo(Semana);
module.exports = FlujoDeEfectivo;


// //git add
// //git add .
// //git commit -m "comentario"
// //git push -u origin main
// //git pull