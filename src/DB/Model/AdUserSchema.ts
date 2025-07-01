import { DataTypes, Model } from "sequelize";
import { sequelize } from "../postgres";
import { UserTypeModel } from "./userTypeSchema";

interface AdUsers {
  id: number;
  typeid: number;
  enabled: boolean;
  ad_display_name: string;
  last_logon_time: Date;
  created_date: Date;
  smart_card_logon_required: boolean;
  password_not_required: boolean;
}

export interface AdUserInstance extends Model<AdUsers>, AdUsers {
}

export const AdUserModel = sequelize.define<AdUserInstance>(
  "ad_user",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    typeid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user_type",
        key: "id",
      },
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    ad_display_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_logon_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    smart_card_logon_required: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    password_not_required: {
      type: DataTypes.BOOLEAN,
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
AdUserModel.belongsTo(UserTypeModel, {foreignKey: 'typeid'});
