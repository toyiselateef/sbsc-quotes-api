import passportLocal from "passport-local";
import passport from "passport";
import getUserFromAccount from "./../config/db.js";

passport.use(
  new passportLocal.Strategy(function (username, password, done) {
    getUserFromAccount(username, function (err, user) {
      if (err) return done(err, null);
      else return done(null, user);
    });
  })
);

passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});

export default passport;
