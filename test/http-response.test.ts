import * as mocha from "mocha";
import * as assert from "power-assert";
import { default as HttpResponse } from "../lib/http-response";

describe("HttpResponse", () => {
  it("statusCode", () => {
    const res = new HttpResponse(200);
    assert.deepEqual(res.toObject(), {
      statusCode:200,
      headers: {},
      body: undefined
    })
  });
});
