const knex = require("knex");

const connectionBD = knex({
  client: "sqlite3", // or 'better-sqlite3'
  connection: {
    filename: "./database.db",
  },
  useNullAsDefault: true,
});
module.exports = connectionBD;
