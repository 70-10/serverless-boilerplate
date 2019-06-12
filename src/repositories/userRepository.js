module.exports = (client, tableName) => {
  const repository = {};

  repository.findAll = async () => {
    const { Items } = await client.scan({ TableName: tableName }).promise();
    return Items;
  };

  repository.findById = async id => {
    const { Item } = await client
      .get({
        TableName: tableName,
        Key: { id },
      })
      .promise();

    return Item;
  };

  return repository;
};
