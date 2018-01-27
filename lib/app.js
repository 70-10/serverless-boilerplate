const serverless = require("serverless-http");
const express = require("express");
const bodyParser = require("body-parser");
const co = require("co");
const app = express();

const Users = require("./db/users");

app.use(bodyParser.json({ strict: false }));

app.get("/", (req, res) => {
  console.log(req.params);
  res.send({ status: "ok" });
});

app.get("/users/:id", (req, res) => {
  co(function*() {
    const id = Number(req.params.id);
    const user = yield Users.findById(id);
    if (!user) {
      return res.status(404).send({ message: "Not found user." });
    }
    return res.send(user);
  }).catch(res.send);
});

module.exports.handler = serverless(app);
