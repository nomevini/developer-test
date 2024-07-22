require('dotenv').config(); 
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.PG_HOST, 
  port: parseInt(process.env.PG_PORT, 10), 
  database: process.env.PG_DATABASE,
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  logging: false, 
});

module.exports = sequelize;