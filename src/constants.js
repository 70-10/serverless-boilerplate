const { SERVICE_NAME, NODE_ENV } = process.env;

module.exports = {
  TableName: {
    User: `${SERVICE_NAME}-${NODE_ENV}-User`,
  },
};
