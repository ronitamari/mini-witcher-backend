import { Router } from "express";
import AdUserController from "../Controllers/AdUser.controller";

class AdUsersRouter {
  router: Router;

  constructor() {
    this.router = Router();

    this.router.get("/get-amount", AdUserController.getAmountOfUsersInAD);
    this.router.get("/get-disabled-users-amount", AdUserController.getAmountOfDisabledUsersInAD);
    this.router.get("/get-active-users-amount", AdUserController.getAmountOfActiveUsersInAD);
    this.router.get("/get-inctive-users-amount", AdUserController.getAmountOfInctiveUsersInAD);
    this.router.get("/get-enforced-users-amount", AdUserController.getAmountOfEnforcedUsersInAD);
    this.router.get(
      "/get-not-enforced-users-amount",
      AdUserController.getAmountOfNotEnforcedUsersInAD
    );
    this.router.get("/get-all-users", AdUserController.getAllUsersInAD);
    this.router.get("/get-users-amount-by-type", AdUserController.getAmountOfUsersByTypeInAD);
  }
}

export default new AdUsersRouter();
