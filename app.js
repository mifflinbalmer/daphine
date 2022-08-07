const createError = require("http-errors");
const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const streamRouter = require("./routes/stream");
const musicRouter = require("./routes/music");
const uploadRouter = require("./routes/upload");

const app = express();

const CORS_OPT = {
  origin: [
    "https://dprk.zone",
    "http://dprk.zone",
    "https://krentus.com",
    "http://krentus.com",
    "http://127.0.0.1"
  ],
};

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", cors(CORS_OPT), indexRouter);
app.use("/stream*", cors(CORS_OPT), streamRouter);
app.use("/music*", cors(CORS_OPT), musicRouter);
app.use("/upload*", cors(CORS_OPT), uploadRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
