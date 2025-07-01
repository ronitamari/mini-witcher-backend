import cookieParser from "cookie-parser";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import session from "express-session";
import passport from "passport";
import { appConfig } from "./Config/app.config";
import { connection, sequelize } from "./DB/postgres";
import bodyParser from "body-parser";
import AdUsersRouter from "./Routes/AdUser.router";
import userType from "./Routes/userType.router";
import witcherUsersRouter from "./Routes/witcherUsers.router";
import PassportLocal from "passport-local";
// import "./Strategy/local-strategy.mw";
// import LocalStrategy from "passport-local";
import bcrypt from "bcrypt";
import { Strategy as LocalStrategy } from "passport-local";
import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";
import crypto from "crypto";
import { WitcherUserModel } from "./DB/Model/witcherUserSchema";
import jsonwebtoken from "jsonwebtoken";
import witcherUserService from "./Services/witcherUser.service";

const app = express();
app.use(bodyParser.json());
app.use(passport.initialize());
// app.use(express.json());
app.use(cors());
app.use(express.urlencoded());

var SequelizeStore = require("connect-session-sequelize")(session.Store);

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      console.log("checking user in db");
      const user = await WitcherUserModel.findOne({ where: { username } });
      if (!user) return done(null, false, { message: "User not found" });
      console.log("user in db");
      console.log("salt: " + appConfig.salt);
      const isMatch = bcrypt.compareSync(
        password + appConfig.salt,
        user.password
      );
      if (!isMatch) return done(null, false, { message: "Invalid password" });
      console.log("password match:)");
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: "stam mamash",
    },
    async function (jwtPayload, cb) {
      console.log("checking the jwt");
      //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
      try {
        const user = await WitcherUserModel.findByPk(jwtPayload.id);
        return cb(null, user);
      } catch (err) {
        return cb(err);
      }
    }
  )
);
// const options = {
//   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//   secretOrKey: PUB_KEY,
//   algorithms: ["RS256"],
// };

// passport.use(
//   new JwtStrategy(options, function (jwt_payload, done) {}));
//  passport.use(
//   new PassportLocal.Strategy(
//       {
//         usernameField: "username",
//       },
//       async (username, password) => {
//         witcherUserService.getWitcherUserValidation(username, password);
//       }
//  )
// );

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user: Express.User, done) => done(null, user));
// app.use(passport.session());

// app.use(passport.initialize());
// app.use(passport.session());
// app.use(cookieParser());

app.use(passport.initialize());
app.use(
  session({
    secret: appConfig.sessionSecret!,
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize,
    }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  console.log("-----------------------------------------------");
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null){ res.sendStatus(401)}

    jsonwebtoken.verify(token!, appConfig.tokenSecret as string, (err: any, user: any) => {
      console.log(err)
  
      if (err){ res.sendStatus(403)}
  
      // req.user = user
  
      next()
    })
  // if (req.query.jwt && appConfig.tokenSecret) {
  //   const decoded = jsonwebtoken.verify(
  //     req.query.jwt.toString(),
  //     appConfig.tokenSecret
  //   );
  //   console.log(decoded);
  //   if (decoded) next();
  //   else return;
  // }
  // return;
};
app.use("/login", passport.authenticate("local"), witcherUsersRouter.router);
// app.use(passport.authenticate("local"))
app.use("/ad-users", checkJwt, AdUsersRouter.router);
app.use("/users-type", checkJwt, userType.router);

app.listen(appConfig.port, () => {
  console.log(`Running on port ${appConfig.port}`);
});

connection();
// function getWitcherUserValidation(username: string, password: string) {
//   throw new Error("Function not implemented.");
// }
