import { Strategy as LocalStrategy } from 'passport-local';
import passport from 'passport';
import bcrypt from 'bcrypt';
import { WitcherUserModel as User } from '../DB/Model/witcherUserSchema';

passport.use(new LocalStrategy(
  async (username, password, done) => {
    try {
      const user = await User.findOne({ where: { username } });
      if (!user) return done(null, false, { message: 'User not found' });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return done(null, false, { message: 'Invalid password' });

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }
));
