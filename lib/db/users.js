const DynamoDB = require("./dynamodb");

const TableName = "users";

module.exports = {
  findById,
};
function* findById(id) {
  const { Item } = yield DynamoDB.get({
    TableName,
    Key: { id },
  }).promise();

  return Item;
}
