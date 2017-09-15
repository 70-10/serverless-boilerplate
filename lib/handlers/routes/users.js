import handler from "../handler";
import * as Users from "../../db/users";

export const findById = handler(async event => {
  const id = Number(event.pathParameters.id);
  const user = await Users.findById(id);
  if (!user) {
    return { statusCode: 404 };
  }
  return {
    statusCode: 200,
    body: user,
  };
});
