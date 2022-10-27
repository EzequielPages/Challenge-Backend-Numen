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

const getUser = (err, req, res) => {
  res.status(200).send(users);
};

const createUser = (req, res) => {
  const { id, name, lastname, dni } = req.body;

  res.status(200).send({
    message: "El usuario fue creado exitosamente!",
    id,
    name,
    lastname,
    dni,
  });
};

const updateUser = (req, res) => {
  const { id } = req.params;

  res.status(200).send({
    message: "El usuario fue actualizado exitosamente!",
    id,
  });
};

const deleteUser = (req, res) => {
  res.status(200).send({
    message: "El usuario fue eliminado exitosamente!",
  });
};

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
