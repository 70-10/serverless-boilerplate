const exporess = require("express");
const router = exporess.Router();
const Users = require("../repositories/users");

router.get("/", async (req, res) => {
  const users = await Users.All();
  return res.send({ users });
});

router.post("/", async (req, res) => {
  const user = await Users.createAsync({ id: Number(req.body.id), name: req.body.name });
  return res.json(user);
});

router.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const user = await Users.findById(id);
  if (!user) {
    return res.status(404).send({ message: "Not found user." });
  }
  return res.send(user);
});

module.exports = router;
