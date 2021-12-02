// variable untuk menyimpan data user
const users = [
  {
    id: 1,
    name: "Ninja Ken",
    nationality: "Japan",
    isDeleted: false,
  },
];

class UserController {
  // menambahkan satu user baru
  static createUser(req, res) {
    // mengambil value "name" dan "nationality" dari req.body
    const { name, nationality } = req.body;

    // menyimpan data "user"
    const currentId = users.length + 1;
    const user = {
      id: currentId,
      name: name,
      nationality: nationality,
      isDeleted: false,
    };

    // menambahkan data "user" ke dalam variable "users"
    users.push(user);

    // me-return "user" yang baru ditambahkan
    res.status(200).json(user);
  }

  // mengambil semua data user
  static getUsers(req, res) {
    // memfilter user dengan isDeleted = false
    const foundUsers = users.filter((user) => !user.isDeleted);

    // me-return "users" dengan isDeleted = false
    res.status(200).json(foundUsers);
  }

  // mengambil satu user tertentu
  static getUserById(req, res) {
    // mengambil value "id"
    const { id } = req.params;

    // mengambil index "user" di variable "users"
    const index = id - 1;
    const user = users[index];

    // mengecek apakan user tidak ada atau sudah dihapus
    if (!user || user.isDeleted) {
      res.status(404).json("User not found!");
    } else {
      res.status(200).json(user);
    }
  }

  // mengupdate sebuah user
  static updateUser(req, res) {
    // mengambil value "id"
    const { id } = req.params;

    // mengambil value "name" dan "nationality" dari req.body
    const { name, nationality } = req.body;

    // mengambil index "user" di variable "users"
    const index = id - 1;
    const user = users[index];

    // mengecek apakan user tidak ada atau sudah dihapus
    if (!user || user.isDeleted) {
      res.status(404).json("User not found!");
    }

    // mengupdate data user
    user.name = name;
    user.nationality = nationality;

    // me-return "user" yang diupdate
    res.status(200).json(users[index]);
  }

  // mengupdate sebuah user
  static deleteUser(req, res) {
    // mengambil value "id"
    const { id } = req.params;

    // mengambil index "user" di variable "users"
    const index = id - 1;
    const user = users[index];

    // mengecek apakan user tidak ada atau sudah dihapus
    if (!user || user.isDeleted) {
      res.status(404).json("User not found!");
    }

    // menghapus data user dari variable "users"
    user.isDeleted = true;

    // me-return "user" yang diupdate
    res.status(200).json(`User id ${id} is deleted!`);
  }
}

module.exports = UserController;
