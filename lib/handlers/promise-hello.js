"use strict";

module.exports = event => {
  return Promise.resolve({
    message: "Hello Serverless! for Promise",
    event,
  });
};
