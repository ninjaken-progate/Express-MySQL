const express = require("express");
const app = express();
const port = 3000;

const userRouter = require("./routers/user");

// middleware
app.use(express.json());
app.use(express.urlencoded());

app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
