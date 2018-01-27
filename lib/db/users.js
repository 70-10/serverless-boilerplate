const DynamoDB = require("./dynamodb");
const { TableName } = require("../constants");

module.exports = {
  findById,
};

function* findById(id) {
  const { Item } = yield DynamoDB.get({
    TableName: TableName.User,
    Key: { id },
  }).promise();

  return Item;
}
