let users = [
  {
    id: 1,
    name: "ignacio",
    lastname: "morales",
    dni: 35289554,
  },
  {
    id: 2,
    name: "ezequiel",
    lastname: "pages",
    dni: 34888963,
  },
  {
    id: 3,
    name: "matias",
    lastname: "dominguez",
    dni: 36874112,
  },
  {
    id: 4,
    name: "leo",
    lastname: "vazquez",
    dni: 33951663,
  },
];

const getUser = (req, res) => {
  res.status(200).send(users);
};

const createUser = (req, res) => {
  const newUser = { ...req.body, id: users.length + 1 };
  users.push(newUser);

  res.status(201).send(users);
};

const updateUser = (req, res) => {
  const newData = req.body;
  const userUpdate = users.find(
    (users) => users.id === parseInt(req.params.id)
  );

  if (!userUpdate) {
    return res
      .status(404)
      .json({ message: "Usuario no actualizado inexistente" });
  }

  users = users.map((u) =>
    u.id === parseInt(req.params.id) ? { ...u, ...newData } : u
  );

  res.status(201).send("Usuario actualizado correctamente");
};

const deleteUser = (req, res) => {
  const userDel = users.find((users) => users.id === parseInt(req.params.id));

  if (!userDel) {
    return res
      .status(404)
      .json({ message: "Usuario no eliminado inexistente" });
  }
  users = users.filter((u) => u.id !== parseInt(req.params.id));

  res.status(201).send("Usuario eliminado");
};

const getOneUser = (req, res) => {
  const userFound = users.find((users) => users.id === parseInt(req.params.id));

  if (!userFound) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }

  res.status(200).json(userFound);
};

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getOneUser,
};
