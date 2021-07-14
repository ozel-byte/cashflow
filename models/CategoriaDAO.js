const {Model,DataTypes} = require('sequelize');
const sequelize = require('../DATABASE/db');

class Categoria extends Model{}

Categoria.init({
    idCategoria: {
        primaryKey: true
    },
    clasificacion: DataTypes.STRING,
    categoria: DataTypes.STRING,
    subCategoria: DataTypes.STRING
},
{
    sequelize,
    modelName: 'categoria',
    freezeTableName: true
});

module.exports = Categoria;