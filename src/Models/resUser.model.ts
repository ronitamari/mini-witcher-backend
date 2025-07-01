import { Response } from "express";
import sequelize, { Model } from "sequelize";

export type ResUser = {
  response?: Response;
  count?: number;
  users?: Model<any, any>[];
  typeCounter?: sequelize.Model<any, any>[];
  types?: Model<any, any>[];
};

export interface types {
  type: string;
}

export interface typesAmount {

}

export interface usersInAD {
  id: number;
  typeid: number;
  enabled: boolean;
  ad_display_name: string;
  last_logon_time: Date;
  created_date: Date;
  smart_card_logon_required: boolean;
  password_not_required: boolean;
}

export interface UserValidation {
  isValidUser: boolean, 
  token: string
}

// export interface User extends Express.User {
//   id: string
// }
namespace Express {
  interface User {
    id: string
  }
}