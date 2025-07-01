import { Request, RequestHandler, Response } from "express";
import userTypeService from "../Services/userType.service";

class userTypeController{
  getAllUsersTypes: RequestHandler = async (
    req: Request,
    res: Response
  ) => {
    console.log("hereeeeeeeeeeeeeeee");
      res.send(await userTypeService.getAllUsersTypes());
  };
}

export default new userTypeController();