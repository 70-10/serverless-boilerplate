import { Callback, Context } from "aws-lambda";
import { default as DynamoDB } from "../db/dynamodb";
import { default as HttpResponse } from "../http-response";

type Handle = (event: any) => Promise<HttpResponse>;

export const findById = handler(async (event: any) => {
  const id = Number(event.pathParameters.id);
  const { Item } = await DynamoDB.get({
    Key: { id },
    TableName: "users",
  }).promise();

  return new HttpResponse(200, Item);
});

function handler(handle: Handle) {
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
