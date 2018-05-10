const serverless = require("serverless-http");
const express = require("express");
const bodyParser = require("body-parser");
const co = require("co");
const app = express();

const Users = require("./db/users");

app.use(bodyParser.json({ strict: false }));

app.get("/", (req, res) => {
  res.send({ status: "ok" });
});

app.get("/users/:id", async (req, res) => {
  const id = Number(req.params.id);
  const user = await Users.findById(id);
  if (!user) {
    return res.status(404).send({ message: "Not found user." });
  }
  return res.send(user);
});

module.exports.handler = serverless(app, {
  request: (req, event, context) => {
    req.context = event.requestContext;
  },
});
