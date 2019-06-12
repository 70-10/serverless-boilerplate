module.exports = userService => ({
  async findAll(req, res) {
    const users = await userService.findAll();
    return res.send({ users });
  },
  async findById(req, res) {
    const id = Number(req.params.id);
    const user = await userService.findById(id);
    if (!user) {
      return res.status(404).send({ message: "Not found user." });
    }
    return res.send(user);
  },
});
