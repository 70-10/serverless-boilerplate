const exporess = require("express");
const UserRepositoryFactory = require("../repositories/userRepository");
const UserServiceFactory = require("../services/userService");
const UserControllerFactory = require("../controllers/userController");

module.exports = (db, tableName) => {
  const router = exporess.Router();
  const userRepository = UserRepositoryFactory(db, tableName);
  const userService = UserServiceFactory(userRepository);
  const userController = UserControllerFactory(userService);
  router.get("/", userController.findAll);

  router.get("/:id", userController.findById);
  return router;
};
