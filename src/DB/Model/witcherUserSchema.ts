import { DataTypes, Model } from "sequelize";
import { sequelize } from "../postgres";

export interface users {
  id: number;
  display_name: string;
  username: string;
  password: string;
}

interface UserInstance extends Model<users>, users {
}

export const WitcherUserModel = sequelize.define<UserInstance>(
  "witcher_users",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    display_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
  }
);
