const db = require("../helper/db.helper");

const createUsers = async (data) => {
  try {
    const sql =
      'INSERT INTO "user"("email", "password", "status") VALUES($1, $2, $3) RETURNING *';
    const value = [data.email, data.password, 'pending'];
    const newUser = await db.query(sql, value);
    return newUser.rows[0];
  } catch (error) {
    if (error) throw error;
  }
};

const selectUserByEmail = (email, cb) => {
    const sql = `SELECT * FROM "user" WHERE email=$1`;
    const value = [email];
    db.query(sql, value, cb);
  };

module.exports = {createUsers, selectUserByEmail};
