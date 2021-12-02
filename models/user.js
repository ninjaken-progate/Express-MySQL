class UserModel {
  static create(con, data) {
    const { name, nationality } = data;

    const sql = `INSERT INTO users
        (Name, Nationality)
        VALUES (?, ?)`;

    return new Promise((resolve, reject) => {
      con.query(sql, [name, nationality], (err, rows) => {
        if (err) {
          reject(err);
        }
        resolve(rows);
      });
    });
  }

  static async find(con) {
    const sql = `SELECT * FROM users`;

    return new Promise((resolve, reject) => {
      con.query(sql, (err, rows) => {
        if (err) {
          reject(err);
        }
        resolve(rows);
      });
    });
  }

  static findOne(con, id) {
    const sql = `SELECT * FROM users
        WHERE id = ?`;

    return new Promise((resolve, reject) => {
      con.query(sql, [id], (err, rows) => {
        if (err) {
          reject(err);
        }
        resolve(rows);
      });
    });
  }

  static update(con, id, data) {
    const { name, nationality } = data;

    const sql = `UPDATE users
        SET 
            Name = ?,
            Nationality = ?
        WHERE id = ?`;

    return new Promise((resolve, reject) => {
      con.query(sql, [name, nationality, id], (err, rows) => {
        if (err) {
          reject(err);
        }
        resolve(rows);
      });
    });
  }

  static delete(con, id) {
    const sql = `DELETE FROM Users
        WHERE id = ?`;

    return new Promise((resolve, reject) => {
      con.query(sql, [id], (err, rows) => {
        if (err) {
          reject(err);
        }
        resolve(rows);
      });
    });
  }
}

module.exports = UserModel;
