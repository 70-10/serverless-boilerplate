const assert = require("assert");
const hello = require("../lib/handlers/hello");
const generatorHello = require("../lib/handlers/generator-hello");
const promiseHello = require("../lib/handlers/promise-hello");

describe("hello", () => {
  describe("handler", () => {
    it("hello serverless world", () => {
      const result = hello({ hoge: "fuga" });
      assert.deepEqual(result, {
        message: "Hello Serverless!",
        event: {
          hoge: "fuga",
        },
      });
    });
  });

  describe("promise", () => {
    it("hello serverless world", function*() {
      const result = yield promiseHello({ hoge: "fuga" });
      assert.deepEqual(result, {
        message: "Hello Serverless! for Promise",
        event: {
          hoge: "fuga",
        },
      });
    });
  });

  describe("generator", () => {
    it("hello serverless world", function*() {
      const result = yield generatorHello({ hoge: "fuga" });
      assert.deepEqual(result, {
        message: "Hello Serverless! for Generator Function",
        event: {
          hoge: "fuga",
        },
      });
    });
  });
});
