const {Model,DataTypes} = require('sequelize');
const sequelize = require('../DATABASE/db');

class indicacadoresFinancieros extends Model{}

indicacadoresFinancieros.init({
    idIndicadoresDinero: {
        primaryKey: true,
        type: DataTypes.STRING
    },
    tipoIndicador: DataTypes.STRING,
    numeroSemana: DataTypes.STRING,
    razonSocial: DataTypes.STRING,
    monto: DataTypes.DOUBLE

},{sequelize, modelName: 'indicadoresDinero', freezeTableName: true});

module.exports = indicacadoresFinancieros;