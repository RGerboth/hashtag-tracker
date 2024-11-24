import { Model, DataTypes } from 'sequelize';
import { sequelize } from '.';

class Tweet extends Model {
  public id!: number;
  public username!: string;
  public password!: string;
}

Tweet.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: 'Tweet',
  }
);

export { Tweet };
