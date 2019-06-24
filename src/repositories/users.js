const DynamoDB = require("./dynamodb");
const { TableName } = require("../constants");

module.exports = {
  findById,
  All,
  async createAsync(item) {
    await DynamoDB.put({ TableName: TableName.User, Item: item }).promise();
    return item;
  },
};

async function findById(id) {
  const { Item } = await DynamoDB.get({
    TableName: TableName.User,
    Key: { id },
  }).promise();

  return Item;
}

async function All() {
  const { Items } = await DynamoDB.scan({ TableName: TableName.User }).promise();
  return Items;
}
