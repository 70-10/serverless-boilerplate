const { NODE_ENV } = process.env;

module.exports = {
  TableName: {
    User: `user-table-${NODE_ENV}`,
  },
};
