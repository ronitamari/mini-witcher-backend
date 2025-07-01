import jwt from "jsonwebtoken";
import { appConfig } from "../Config/app.config";
import { WitcherUserModel } from "../DB/Model/witcherUserSchema";
import bcrypt from "bcrypt";
import { UserValidation } from "../Models/resUser.model";

export class witcherUserService {
  getWitcherUserValidation = async (
    username: string,
    password: string
  ): Promise<UserValidation> => {
    const witcherUser = await WitcherUserModel.findOne({
      where: {
        username: username,
      },
    });

    let userValidation = { isValidUser: false, token: "" };

    if (
      witcherUser &&
      bcrypt.compareSync(password + appConfig.salt, witcherUser.password)
    ) {
      console.log("is good :)");
      userValidation.isValidUser = true;
      userValidation.token = jwt.sign(
        { username: username, role: 1 },
        `${appConfig.tokenSecret}`
      );
      console.log(userValidation.token)
    }
    return userValidation;
  };
}

export default new witcherUserService();

// app.post('/login', (req, res, next) => {
//   passport.authenticate('local', { session: false }, (err, user, info) => {
//     if (err || !user) {
//       return res.status(401).json({ message: info?.message || 'Login failed' });
//     }

//     const payload = {
//       id: user.id,
//       username: user.username,
//     };

//     const token = jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: '1h' });
//     return res.json({ token });
//   })(req, res, next);
// });
