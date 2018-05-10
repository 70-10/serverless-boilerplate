const DynamoDB = require("./dynamodb");
const { TableName } = require("../constants");

module.exports = {
  findById,
};

async function findById(id) {
  const { Item } = await DynamoDB.get({
    TableName: TableName.User,
    Key: { id },
  }).promise();

  return Item;
}
