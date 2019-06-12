const serverless = require("serverless-http");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const AWS = require("aws-sdk");
const { TableName } = require("./constants");
const UserRouteFactory = require("./routes/users");

const db = process.env.IS_OFFLINE
  ? new AWS.DynamoDB.DocumentClient({
      region: "localhost",
      endpoint: "http://localhost:8000",
    })
  : new AWS.DynamoDB.DocumentClient();

app.use(bodyParser.json({ strict: false }));

app.get("/", (req, res) => {
  res.send({ status: "ok" });
});

app.use("/users", UserRouteFactory(db, TableName.User));

module.exports.handler = serverless(app, {
  request: (req, event, context) => {
    req.context = event.requestContext;
  },
});
