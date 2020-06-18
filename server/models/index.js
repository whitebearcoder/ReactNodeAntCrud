const Sequelize = require('sequelize');

var db = {};

const env = process.env.NODE_ENV || 'development';
const CONFIG = require('../config/config')[env];

const sequelize = new Sequelize(
  CONFIG.database,
  CONFIG.username,
  CONFIG.password,
  {
    host: CONFIG.host,
    dialect: CONFIG.dialect,
    port: 3306,
    operatorsAliases: false,
  },
);

let models = [require('./user.js')];

// Initialize models
models.forEach((model) => {
  const seqModel = model(sequelize, Sequelize);
  db[seqModel.name] = seqModel;
});

// Apply associations
Object.keys(db).forEach((key) => {
  if ('associate' in db[key]) {
    db[key].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
