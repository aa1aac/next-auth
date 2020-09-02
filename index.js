const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const next = require("next");

const { MONGO_URI, SECRET } = require("./config");

const passport = require("./services/passport");
const AuthRoute = require("./routes/Auth");

const app = express();

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
const PORT = process.env.PORT || 5000;

nextApp.prepare().then(() => {
  app.use(express.json());

  app.use(
    session({
      secret: SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: { secure: false },
      store: new MongoStore({
        mongooseConnection: mongoose.connection,
      }),
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  app.use("/api/auth", AuthRoute);

  app.get("*", (req, res) => {
    handle(req, res);
  });

  mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("conected to mongo database"))
    .catch((e) => console.error(e));

  app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
});
