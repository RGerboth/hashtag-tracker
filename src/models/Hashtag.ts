import { Model, DataTypes } from "sequelize";
import { sequelize } from ".";

class Hashtag extends Model {
  public id!: number;
  public Hashtagname!: string;
  public password!: string;
  tag: any;
}

Hashtag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    tag: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    count: {
      type: DataTypes.INTEGER,
    },
    previousRank: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "Hashtag",
  }
);

export { Hashtag };
