const { Sequelize } = require('sequelize');

// Ici on utilise SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite' // Le fichier sera créé automatiquement
});

module.exports = sequelize;
