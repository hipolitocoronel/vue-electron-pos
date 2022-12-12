const knex = require("../utils/db");

const getAllUsers = async (req, res) => {
  const users = await knex.select().table("user");
  console.log("users: ", users);
  return res.send(JSON.stringify(users));
};

module.exports = { getAllUsers };
