const express = require("express");
const app = express();
const authRouter = require("./routes/auth");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/api", authRouter);

const usuarios = [
  {
    username: "admin",
    name: "admin",
    password: "1234",
  },
  {
    username: "hipolitocoronel",
    name: "Hipolito Coronel",
    password: "ismael333",
  },
];

app.get("/users", (req, res) => res.json(usuarios));

module.exports = app;
