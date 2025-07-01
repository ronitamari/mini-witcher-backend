import { Router } from "express";
import passport from "passport";
import witcherUserController from "../Controllers/witcherUser.controller";

class witcherUsersRouter {
  router: Router;

  constructor() {
    this.router = Router();
    this.router.get(
      "/",
      witcherUserController.getWitcherUserToken
    );
  }
}

export default new witcherUsersRouter();
