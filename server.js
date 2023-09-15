const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const passportSetup = require("./passport");
const passport = require("passport");
const cors = require("cors");
connectDb();
const app = express();

const port = process.env.PORT || 5000;
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());


app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

// app.use("/api/wiki", require("./routes/userRoutes"));
app.use("/api/auth", require("./routes/auth"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
