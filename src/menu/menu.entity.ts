import db from '../lib/db'
import { STRING, Model, INTEGER } from 'sequelize'

class MenuEntity extends Model {
  public title!: string
  public desc!: string
  public path!: string
}
MenuEntity.init(
  {
    menuId: {
      type: INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: STRING,
      allowNull: false,
    },
    desc: {
      type: STRING,
      allowNull: false,
    },
    path: {
      type: STRING,
      allowNull: false,
    },
  },
  { tableName: 'menu', sequelize: db.sequelize! },
)

export default MenuEntity
