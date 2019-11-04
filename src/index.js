const express = require("express");
require("./db/mongoose");

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     res.send("get requests are disabled");
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res.status(503).send("site is on maintenance");
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

//Without middleware:     new request --> run route handler
//with middleware:        new request --> do something --> run route handler

app.listen(port, () => {
  console.log("Server is on the port" + port);
});

// const jwt = require("jsonwebtoken");

// const myFunction = async () => {
//   const token = jwt.sign({ _id: "12345" }, "thisiscalledtoken", {
//     expiresIn: "7 days"
//   });
//   console.log(token);

//   const data = jwt.verify(token, "thisiscalledtoken");
//   console.log(data);
// };

// myFunction();