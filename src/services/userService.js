class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async findAll() {
    return this.userRepository.findAll();
  }

  async findById(id) {
    return this.userRepository.findById(id);
  }
}

module.exports = userRepository => new UserService(userRepository);
