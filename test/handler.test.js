import handler from "../lib/handlers/handler";
import assert from "power-assert";

describe("handler", () => {
  it("response 200", done => {
    const handlerFn = async () => {
      return {
        statusCode: 200,
        body: { name: "test" },
      };
    };

    handler(handlerFn)(null, null, (err, result) => {
      assert(result.statusCode === 200);
      const body = JSON.parse(result.body);
      assert(body.name === "test");
      done();
    });
  });
});
