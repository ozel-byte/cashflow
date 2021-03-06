const {Sequelize} = require('sequelize');
const {database} = require('../config');
/*Configuracion de la base de datos */

const sequelize = new Sequelize(
    database.db_server,
    database.username_server,
    database.password_server,
    {
        host: database.host_server,
        dialect: 'mysql',
        logging: false,
        define : {
            timestamps: false
        }
    }
);

module.exports = sequelize;