"use strict";

const lambda = require("./lambda");

module.exports = {
  hello: lambda.wrap(require("./hello")),
  helloPromise: lambda.wrap(require("./promise-hello")),
  helloGeneratorFunction: lambda.wrap(require("./generator-hello")),
};
