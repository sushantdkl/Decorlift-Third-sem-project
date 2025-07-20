const userController = require("../controllers/userController");
const User = require("../model/User");

jest.mock("../model/User", () => ({
  create: jest.fn(),
  findAll: jest.fn(),
  findByPk: jest.fn(),
  destroy: jest.fn(),
  update: jest.fn(),
  findOne: jest.fn(), // for login
}));

describe("User Controller", () => {
  const mockRes = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
  };

  it("should create a user", async () => {
    const req = { body: { username: "test", email: "test@mail.com" } };
    const res = mockRes();

    User.create.mockResolvedValue(req.body);

    await userController.create(req, res);

    expect(User.create).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining(req.body));
  });

  it("should get all users", async () => {
    const req = {};
    const res = mockRes();

    const mockUsers = [{ id: 1, username: "john" }];
    User.findAll.mockResolvedValue(mockUsers);

    await userController.getAll(req, res);

    expect(User.findAll).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockUsers);
  });

  it("should get user by ID", async () => {
    const req = { params: { id: 1 } };
    const res = mockRes();

    const user = { id: 1, username: "john" };
    User.findByPk.mockResolvedValue(user);

    await userController.getById(req, res);

    expect(User.findByPk).toHaveBeenCalledWith(1);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(user);
  });

  it("should return 404 if user not found by ID", async () => {
    const req = { params: { id: 999 } };
    const res = mockRes();

    User.findByPk.mockResolvedValue(null);

    await userController.getById(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ error: "User not found" });
  });

  it("should update a user", async () => {
    const req = { params: { id: 1 }, body: { username: "updated" } };
    const res = mockRes();

    User.update.mockResolvedValue([1]); // Sequelize returns [rowsUpdated]

    await userController.update(req, res);

    expect(User.update).toHaveBeenCalledWith(req.body, { where: { id: 1 } });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ message: "User updated successfully" });
  });

  it("should delete a user by ID", async () => {
    const req = { params: { id: 1 } };
    const res = mockRes();

    User.destroy.mockResolvedValue(1);

    await userController.delelteById(req, res);

    expect(User.destroy).toHaveBeenCalledWith({ where: { id: 1 } });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ message: "User deleted successfully" });
  });

  it("should handle login", async () => {
    const req = { body: { email: "test@mail.com", password: "123456" } };
    const res = mockRes();

    const mockUser = {
      id: 1,
      email: "test@mail.com",
      password: "123456", // ideally hashed
      username: "testUser"
    };

    User.findOne.mockResolvedValue(mockUser);

    await userController.login(req, res);

    expect(User.findOne).toHaveBeenCalledWith({ where: { email: req.body.email } });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ email: "test@mail.com" }));
  });

  it("should return 401 if login fails", async () => {
    const req = { body: { email: "wrong@mail.com", password: "wrong" } };
    const res = mockRes();

    User.findOne.mockResolvedValue(null);

    await userController.login(req, res);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ error: "Invalid credentials" });
  });
});
