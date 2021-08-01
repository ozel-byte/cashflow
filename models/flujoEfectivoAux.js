const {Model,DataTypes} = require('sequelize');


class FlujoEfectivoaux extends Model{}

FlujoEfectivoaux.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    semana: DataTypes.ARRAY
});


module.exports = FlujoEfectivoaux;