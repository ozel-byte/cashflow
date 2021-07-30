const {Model,DataTypes} = require('sequelize');
const sequelize = require('../DATABASE/db');
const Categoria = require('./CategoriaDAO');

class FlujoDeEfectivo extends Model{}

FlujoDeEfectivo.init({
    idFlujoEfectivo: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    mes: DataTypes.STRING,
    tipoFlujo: DataTypes.STRING,
    fecha: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    cantidad: DataTypes.DOUBLE,
    numeroSemana: DataTypes.INTEGER
},
{
    sequelize,
    modelName: 'flujoEfectivo',
    freezeTableName: true
});

FlujoDeEfectivo.Categoria = FlujoDeEfectivo.belongsTo(Categoria)

module.exports = FlujoDeEfectivo;




//git add
//git add .
//git commit -m "comentario"
//git push -u origin main
//git pull