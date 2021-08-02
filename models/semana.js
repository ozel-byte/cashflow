const {Model,DataTypes} = require('sequelize');
const sequelize = require('../DATABASE/db');
const Categoria = require('./CategoriaDAO');


class Semana extends Model{}



Semana.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    descripcion: {
        type:DataTypes.STRING,
    },
    numeroSemana: DataTypes.INTEGER,
    monto: DataTypes.DOUBLE,
    mes: DataTypes.STRING,
    tipo: DataTypes.STRING
},{
    sequelize,
    modelName: 'Semana',
    freezeTableName: true,
    
});

Semana.Categoria = Semana.belongsTo(Categoria);

module.exports = Semana;