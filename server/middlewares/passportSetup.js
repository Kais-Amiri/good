const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");
const patient = require("../models/patient");

const secretOrPrivateKey = process.env.secretOrPrivateKey;
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secretOrPrivateKey,
};

passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    const Patient = await patient.findOne({ id: jwt_payload.id });

    Patient ? done(null, user) : done(null, false);
  })
);

module.exports = isAuth = () =>
  passport.authenticate("jwt", { session: false });
