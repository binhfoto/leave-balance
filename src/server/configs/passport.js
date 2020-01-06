const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

passport.use(
    new GoogleStrategy(
        {
            clientID: "828662593913-g7kukr56p765edb18enm611p56jr3ub0.apps.googleusercontent.com",
            clientSecret: "vmiV5NvTQBZWPN5wuWRUypo7",
            callbackURL: "http://localhost:3000/auth/google/callback"
        },
        function (accessToken, refreshToken, profile, done) {
            const userData = {
                email: profile.emails[0].value,
                name: profile.displayName,
                token: accessToken
            };
            done(null, userData);
        }
    )
);
