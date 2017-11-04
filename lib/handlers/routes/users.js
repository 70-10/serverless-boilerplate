const handler = require("../handler");
const Users = require("../../db/users");

module.exports.findById = handler(function*(event) {
  const id = Number(event.pathParameters.id);
  const user = yield Users.findById(id);
  if (!user) {
    return { statusCode: 404 };
  }
  return {
    statusCode: 200,
    body: user,
  };
});
