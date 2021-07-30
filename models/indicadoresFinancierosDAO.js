const {Model,DataTypes} = require('sequelize');
const sequelize = require('../DATABASE/db');

class indicacadoresFinancieros extends Model{}

indicacadoresFinancieros.init({
    idIndicadoresDinero: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    mes:DataTypes.STRING,
    tipoIndicador: DataTypes.STRING,
    numeroSemana: DataTypes.STRING,
    razonSocial: DataTypes.STRING,
    monto: DataTypes.DOUBLE,
    fecha: DataTypes.STRING

},{sequelize, modelName: 'indicadoresDinero', freezeTableName: true});

module.exports = indicacadoresFinancieros;