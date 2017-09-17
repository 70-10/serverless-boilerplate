import DynamoDB from "./dynamodb";

const TableName = "users";

export const findById = async id => {
  const { Item } = await DynamoDB.get({
    TableName,
    Key: { id },
  }).promise();

  return Item;
};
