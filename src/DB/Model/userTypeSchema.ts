import { DataTypes, Model } from "sequelize";
import { sequelize } from "../postgres";
import { AdUserModel } from "./AdUserSchema";

interface types {
  id: number;
  type: string;
  type_display_name: string;
}

interface TypeInstance extends Model<types>, types {
}

export const UserTypeModel = sequelize.define<TypeInstance>(
  "user_type",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type_display_name: {
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