import { Sequelize } from 'sequelize'
import mysql2 from 'mysql2'

const host =
  process.env.NODE_ENV === 'production'
    ? process.env.DB_HOST
    : process.env.DB_DEV_HOST

const sequelize = new Sequelize(
  'foodie',
  process.env.DB_USER!,
  process.env.DB_PASSWORD,
  {
    host,
    dialect: 'mysql',
    dialectModule: mysql2,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
)

export default sequelize
