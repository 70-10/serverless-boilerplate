import { default as AWS } from "../aws";

const DynamoDB = AWS.DynamoDB;
const isOffline = () => process.env.IS_OFFLINE;

export default (isOffline()
  ? new DynamoDB.DocumentClient({
      endpoint: "http://localhost:8000",
      region: "localhost",
    })
  : new DynamoDB.DocumentClient());
