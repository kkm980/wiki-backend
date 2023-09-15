var GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require("passport");
const GOOGLE_CLIENT_ID="344950721521-bob6haio0kqfctm6keheurcfh4rm9qqj.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET="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";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);


passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});