import { default as AWS } from "../aws";

const DynamoDB = AWS.DynamoDB;
const isOffline = () => process.env.IS_OFFLINE;

export default (isOffline()
  ? new DynamoDB.DocumentClient({
      region: "localhost",
      endpoint: "http://localhost:8000",
    })
  : new DynamoDB.DocumentClient());
