require('dotenv').config();

const CONFIG = {};
CONFIG.BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3000';
CONFIG.API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/v1';
module.exports = CONFIG;
