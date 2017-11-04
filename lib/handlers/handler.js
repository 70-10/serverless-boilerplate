const co = require("co");

module.exports = handleFn => {
  return (event, context, callback) => {
    co(function*() {
      const result = yield handleFn(event, context);
      callback(null, createHTTPResponse(result.statusCode || 200, result.body));
    }).catch(err => {
      callback(null, createHTTPResponse(500, err));
    });
  };
};

function createHTTPResponse(statusCode, body) {
  return {
    statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(body),
  };
}
