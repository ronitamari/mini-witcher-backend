import bcrypt from "bcrypt";
import passport from "passport";
import PassportLocal, { Strategy } from "passport-local";
import { appConfig } from "../Config/app.config";
import { WitcherUserModel } from "../DB/Model/witcherUserSchema";
import { error } from "console";


// passport.use(Strategy);
passport.serializeUser((user: Express.User, done) => done(null, user));
// passport.serializeUser((user, done) => done(null, user));
// passport.deserializeUser((user: Express.User, done) => done(null, user));
passport.deserializeUser(async (userId: number, done) => {
  const user = await WitcherUserModel.findOne({
    where: {
      id: userId,
    }
  })
  user ? done(null, user) : done(error);

})
passport.use(
  new PassportLocal.Strategy(
    {
      usernameField: "username",
    },
    async (username, password, done) => {
      try {
        console.log("hiiiiiiiiiiiiiiiiiiiiiiii")
        // console.log(`the password: ${password}\nthe username: ${username}`);
        // const witcherUser = await WitcherUserModel.findOne({
        //   where: {
        //     username: username,
        //   },
        // });
        // if (witcherUser && bcrypt.compareSync(password + appConfig.pepper, witcherUser.password)) {
          console.log("is good :)")
          done(null, true);
        // } else {
        //   done(null, false);
        // }
      } catch (error) {
        done(error);
      }
    }
  )
);


