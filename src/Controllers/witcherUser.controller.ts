import { Request, Response } from "express";
import witcherUserService from "../Services/witcherUser.service";
import { WitcherUserModel } from "../DB/Model/witcherUserSchema";
import { UserValidation } from "../Models/resUser.model";

class witcherUserController {
  getWitcherUserToken = async (req: Request, res: Response) => { //post
console.log("before checking the user");
    const userValidation = await witcherUserService.getWitcherUserValidation(
      req.query.username ? req.query.username.toString() : "",
      req.query.password ? req.query.password.toString() : "",
    );
    console.log("before checking the user");
    console.log("user is valid? " + userValidation.isValidUser + "\nuser token: " + userValidation.token);
    res.send(userValidation);
  };
}
export default new witcherUserController();
