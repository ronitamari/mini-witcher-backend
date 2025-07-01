import { Request } from "express";

export interface ReqUser extends Request{
    user: {
      id: number;
      username: string;
      display_name: string;
    }
  }
  