import { Request, Response } from "express";

import AdUserService from "../Services/AdUser.service";

class AdUserController {
  getAllUsersInAD = async (req: Request, res: Response): Promise<void> => {
      const ans = await AdUserService.getAllUsersInAD(Number(req.query.page), Number(req.query.limit));
      res.send(ans);
  };

  getAmountOfUsersInAD = async (
    req: Request,
    res: Response
  ) => {
    try {
      const responsebla = (await AdUserService.getAmountOfUsersInAD()).toString();
      res.send(responsebla);
    } catch (e: any) {
      console.log(e);
    }
  };

  getAmountOfDisabledUsersInAD = async (
    req: Request,
    res: Response
  ) => {
    res.send((await AdUserService.getAmountOfDisabledUsersInAD()).toString());
  };

  getAmountOfActiveUsersInAD = async (
    req: Request,
    res: Response
  ) => {

    res.send((await AdUserService.getAmountOfActiveUsersInAD()).toString());
  };

  getAmountOfInctiveUsersInAD = async (
    req: Request,
    res: Response
  ) => {

    res.send((await AdUserService.getAmountOfInctiveUsersInAD()).toString());
  };

  getAmountOfEnforcedUsersInAD = async (
    req: Request,
    res: Response
  ) => {

    res.send((await AdUserService.getAmountOfEnforcedUsersInAD()).toString());
  };

  getAmountOfNotEnforcedUsersInAD = async (req: Request, res: Response) => {

    res.send((await AdUserService.getAmountOfNotEnforcedUsersInAD()).toString());
  };

  getAmountOfUsersByTypeInAD = async (
    req: Request,
    res: Response
  ) => {
    const ans = await AdUserService.getAmountOfUsersByTypeInAD();
    
    res.send(ans);
  };
}

export default new AdUserController();
