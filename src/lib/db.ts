import { Sequelize } from 'sequelize'

const { DB_HOST, DB_PASSWORD, DB_USER } = process.env

const sequelize = new Sequelize('foodie', DB_USER!, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
})

export default sequelize
