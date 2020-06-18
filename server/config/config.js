require('dotenv').config() //instatiate environment variables
let CONFIG = {
  development: {
    app: process.env.APP || 'dev',
    app_port: process.env.PORT || 5000,
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'crud_test',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: process.env.DB_DIALECT || 'mysql',
    operatorsAliases: false,
    app_url: process.env.APP_URL || 'http://localhost:3000',
  },
  test: {
    app: process.env.APP || 'test',
    app_port: process.env.PORT || 5000,
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'crud_test',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: process.env.DB_DIALECT || 'mysql',
    operatorsAliases: false,
    app_url: process.env.APP_URL || 'http://localhost:3000',
  },
  production: {
    app: process.env.APP || 'product',
    app_port: process.env.PORT || 5000,
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'crud_test',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: process.env.DB_DIALECT || 'mysql',
    operatorsAliases: false,
    app_url: process.env.APP_URL || 'http://localhost:3000',
  },
}
module.exports = CONFIG
