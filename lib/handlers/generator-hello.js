"use strict";

module.exports = function*(event) {
  const res = Promise.resolve({
    message: "Hello Serverless! for Generator Function",
    event,
  });

  return yield res;
};
