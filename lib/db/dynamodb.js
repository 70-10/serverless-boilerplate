import AWS from "../aws";

const isOffline = () => process.env.IS_OFFLINE;

export default (isOffline()
  ? new AWS.DynamoDB.DocumentClient({
      region: "localhost",
      endpoint: "http://localhost:8000",
    })
  : new AWS.DynamoDB.DocumentClient());
