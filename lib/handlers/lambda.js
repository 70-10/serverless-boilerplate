"use strict";

const co = require("co");
const isGenerator = require("is-generator-function");
const isPromise = require("is-promise");

const StatusCode = {
  OK: 200,
};

module.exports = {
  wrap,
};

function wrap(handler) {
  return (event, context, callback) => {
    let fn = handler;
    if (isGenerator(handler)) {
      fn = co.wrap(handler);
    }

    try {
      const result = fn(event);

      if (isPromise(result)) {
        result
          .then(r => {
            callback(null, generateResponse(StatusCode.OK, r));
          })
          .catch(err => {
            if (!err.response) {
              callback(err);
              return;
            }
            callback(null, generateResponse(err.response.statusCode, {}));
          });
        return;
      }

      callback(null, generateResponse(StatusCode.OK, result));
    } catch (e) {
      callback(e);
    }
  };
}

function generateResponse(statusCode, bodyJSON) {
  return {
    statusCode,
    body: JSON.stringify(bodyJSON),
  };
}
