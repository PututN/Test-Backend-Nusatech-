const { Pool } = require("pg");

const db = new Pool({
  connectionString:
    "postgresql://postgres:go6XyM2rNI61PEwA@db.mjgqgxuhexyzkzpsjzyg.supabase.co:5432/postgres",
});

db.connect((err) => {
  if (err) {
    console.log(err);
    console.log("database is not connect");
  } else {
    console.log("database is connect!");
  }
});

module.exports = db;
