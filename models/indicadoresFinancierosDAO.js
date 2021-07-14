const {Model,DataTypes} = require('sequelize');
const sequelize = require('../DATABASE/db');

class IndicacadoresFinancieros extends Model{}

InidacadoresFinancieros.init({
    idIndicadoresDinero: DataTypes.STRING,
    tipoIndicador: DataTypes.STRING,
    numeroSemana: DataTypes.STRING,
    razonSocial: DataTypes.STRING,
    monto: DataTypes.DOUBLE

},{sequelize, modelName: 'indicadoresDinero', freezeTableName: true});

module.exports = IndicacadoresFinancieros;