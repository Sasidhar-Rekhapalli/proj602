// const db = require("../db/connect");
const bcrypt = require("bcrypt");
const passport = require("passport");
const { User } = require("../db/models/user");
const LocalStrategy = require("passport-local").Strategy;

let initPassportLocal = (req, res) => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true,
      },
      async (req, username, password, done) => {
        try {
          console.log("inside initpassport");
          let user = await User.selectOneByUsername(username);
          if (!user) {
            return done(
              null,
              false,
              console.log(`This user "${username} doesn't exist"`)
            );
          }
          if (user) {
            console.log("compare password");
            //compare password
            let match = await User.comparePasswordUser(user, password);
            if (match === true) {
              return done(null, user, null);
            } else {
              return done(
                null,
                false,
                console.log("password did not match", password)
              );
            }
          }
        } catch (err) {}
      }
    )
  );
};

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.getUserById(id)
    .then((user) => {
      return done(null, user);
    })
    .catch((error) => {
      return done(error, null);
    });
});

module.exports = initPassportLocal;
