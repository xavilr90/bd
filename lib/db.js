const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('tu_base_de_datos', 'tu_usuario', 'tu_contraseña', {
    host: 'localhost',
    dialect: 'postgres',
});

module.exports = sequelize;
