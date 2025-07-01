import { Router } from "express";
import userTypeController from "../Controllers/userType.controller";

class userTypeRouter{
    router: Router;

    constructor() {
        this.router = Router();

        this.router.get("/get-all", userTypeController.getAllUsersTypes);

    }
}

export default new userTypeRouter();