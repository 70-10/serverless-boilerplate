const serverless = require("serverless-http");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json({ strict: false }));

app.get("/", (req, res) => {
  res.send({ status: "ok" });
});

app.use("/users", require("./routes/users"));

module.exports.handler = serverless(app, {
  request: (req, event, context) => {
    req.context = event.requestContext;
  },
});
