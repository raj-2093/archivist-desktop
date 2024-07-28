// const sqlite3 = require("sqlite3").verbose();
import sqlite3 from "sqlite3";
import { knexInstance } from "./knexfile";
import { handleProcesses } from "./handleProcesses";
sqlite3.verbose();

const dbName = "archivist_dev.sqlite3";

export const connectDB = () => {
  let db = new sqlite3.Database(dbName, (err) => {
    if (err) {
      console.log("Database -- err -- ", err);
    } else {
      console.log("Database -- connected -- ");
      handleProcesses(db);
    }
  });

  //   console.log("knex db connected -- ", knexInstance);
  const table = knexInstance.schema.createTable("books", (table) => {
    table.increments("id", {
      primaryKey: true,
    });
    table.string("name");
    table.string("author", 100);
  });
  console.log("table -- ", table.toSQL());
};

// const initBookTable = (callback) => {};

// const initTables = () => {
//   initBookTable(function (err) {
//     if (err) {
//       console.log("err--", err);
//     } else {
//     }
//   });
// };
