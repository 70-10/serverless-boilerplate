import { Context, Callback } from "aws-lambda";
import { default as HttpResponse } from "../http-response";
import { default as DynamoDB } from "../db/dynamodb";

type handle = (event: any) => Promise<HttpResponse>;

export const findById = handler(async event => {
  const id = Number(event.pathParameters.id);
  const { Item } = await DynamoDB.get({
    TableName: "users",
    Key: { id }
  }).promise();

  return new HttpResponse(200, Item);
});

function handler(handle: handle) {
  return async (event: any, context: Context, callback: Callback) => {
    try {
      const res = await handle(event);
      callback(null, res.toObject());
    } catch (e) {
      console.error(e);
      callback(null, e);
    }
  };
}
