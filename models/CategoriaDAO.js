const {Model,DataTypes} = require('sequelize');
const sequelize = require('../DATABASE/db');

class Categoria extends Model{}

Categoria.init({
    idCategoria: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    clasificacion: DataTypes.STRING,
    categoria: DataTypes.STRING,
    subCategoria: DataTypes.STRING
},
{
    sequelize,
    modelName: 'categoria',
    freezeTableName: true,
});

module.exports = Categoria;