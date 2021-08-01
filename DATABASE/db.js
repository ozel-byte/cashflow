const {Sequelize} = require('sequelize');

/*Configuracion de la base de datos */
let name = "cashflow";
let user = "administrador";
let pass = "4DM1N.8ry20Mzr";
let host = "167.172.146.90";
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