// const knex = require("knex")({
//   client: "sqlite3", // or 'better-sqlite3'
//   connection: {
//     filename: "./data/archivist_dev.sqlite3",
//   },
// });

import knex from "knex";

export const knexInstance = knex({
  client: "sqlite3",
  connection: {
    filename: "./data/archivist_dev.sqlite3",
  },
});
