const {Sequelize} = require('sequelize');

/*Configuracion de la base de datos */
let name = "";
let user = "";
let pass = "";
let host = "";
const sequelize = new Sequelize(
   name,
    user,
    pass,
    {
        host: host,
        dialect: 'mysql',
        define : {
            timestamps: false
        }
    }
);

module.exports = sequelize;