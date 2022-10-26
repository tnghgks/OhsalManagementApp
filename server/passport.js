import passport from "passport";
import { Strategy as DiscordStrategy } from "passport-discord";
import User from "./Models/User";
var scopes = ["identify"];

passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});
passport.use(
  new DiscordStrategy(
    {
      clientID: "879096400628051988",
      clientSecret:
        "e00b44d787379aa78e29f1f09eabeb02111d9cf88507cef63c9735e83015efd9",
      callbackURL: "http://localhost:3001/discord/callback",
      passReqToCallback: true,
      scope: scopes,
    },
    function(accessToken, refreshToken, profile, cb) {
      User.findOrCreate({ discordId: profile.id }, function(err, user) {
        console.log(user);
        return cb(err, user);
      });
    }
  )
);
