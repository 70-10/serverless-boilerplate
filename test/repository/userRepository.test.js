const UserRepositoryFactory = require("../../src/repositories/userRepository");

describe("UserRepository", () => {
  describe("findAll", () => {
    it("should return items", async () => {
      const Items = [{ id: 1, name: "test" }];
      const client = {
        scan: () => ({ promise: () => Promise.resolve({ Items }) }),
      };

      const repository = UserRepositoryFactory(client, "mock-table");

      expect(await repository.findAll()).toEqual(Items);
    });
  });
});
