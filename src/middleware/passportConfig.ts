import passportLocal from 'passport-local';
import { User } from '../models/User'

const LocalStrategy = passportLocal.Strategy;

const localStrategy = new LocalStrategy(
  async (username: string, password: string, done: Function) => {
    try {
      const user = await User.findOne({ where: { username } });
      if (user && user.password === password) {
        return done(null, user);
      }
      return done(null, false, { message: 'Invalid credentials' });
    } catch (error) {
      return done(error);
    }
  }
);

export { localStrategy };
