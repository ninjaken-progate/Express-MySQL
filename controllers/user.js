const User = require("../models/user");

class UserController {
  // menambahkan satu user baru
  static async createUser(req, res, next) {
    // mengambil value "name" dan "nationality" dari req.body
    const { name, nationality } = req.body;

    try {
      const result = await User.create(req.con, { name, nationality });

      res.status(200).json({
        id: result.insertId,
        name,
        nationality,
      });
    } catch (err) {
      next(err);
    }
  }

  // mengambil semua data user
  static async getUsers(req, res, next) {
    try {
      const users = await User.find(req.con);
      res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  }

  // mengambil satu user tertentu
  static async getUserById(req, res, next) {
    // mengambil value "id"
    const { id } = req.params;

    try {
      const result = await User.findOne(req.con, id);
      const user = result[0];

      if (!user) {
        res.status(404).json(`User id ${id} not found!`);
      } else {
        res.status(200).json(user);
      }
    } catch (err) {
      next(err);
    }
  }

  // mengupdate sebuah user
  static async updateUser(req, res, next) {
    // mengambil value "id"
    const { id } = req.params;

    // mengambil value "name" dan "nationality" dari req.body
    const { name, nationality } = req.body;

    try {
      const result = await User.update(req.con, id, { name, nationality });

      if (!result.affectedRows) {
        res.status(404).json(`User id ${id} not found!`);
      } else {
        res.status(200).json({
          id,
          name,
          nationality,
        });
      }
    } catch (err) {
      next(err);
    }
  }

  // mengupdate sebuah user
  static async deleteUser(req, res, next) {
    // mengambil value "id"
    const { id } = req.params;

    try {
      const result = await User.delete(req.con, id);

      if (!result.affectedRows) {
        res.status(404).json(`User id ${id} not found!`);
      } else {
        res.status(200).json(`User id ${id} is deleted!`);
      }
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
