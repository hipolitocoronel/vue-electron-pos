const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

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
