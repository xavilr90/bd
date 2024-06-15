const { DataTypes } = require('sequelize');
const sequelize = require('../lib/db');

const Cliente = sequelize.define('Cliente', {
    ClienteID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    Id: {
        type: DataTypes.STRING(20),
    },
    Nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    Direccion: {
        type: DataTypes.STRING(200),
    },
    Ciudad: {
        type: DataTypes.STRING(50),
    },
    Email: {
        type: DataTypes.STRING(100),
    },
    Telefono: {
        type: DataTypes.STRING(20),
    },
}, {
    tableName: 'Clientes',
    timestamps: false,
});

module.exports = Cliente;
