const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 3000;

const userRouter = require("./routers/user");

// database setup
const con = mysql.createConnection({
  host: "<DATABASE_HOST>",
  user: "<DATABASE_USER>",
  password: "<DATABASE_PASSWORD>",
  database: "<DATABASE_NAME>",
});

// membuat koneksi ke database
con.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

// menyimpan koneksi database ke dalam object req
app.use((req, res, next) => {
  req.con = con;
  next();
});

// middleware
app.use(express.json());
app.use(express.urlencoded());

app.use("/user", userRouter);

// error handler
app.use((err, req, res, next) => {
  console.log(err);
  const message = err.sqlMessage || "Something broke!";
  res.status(500).send(message);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
