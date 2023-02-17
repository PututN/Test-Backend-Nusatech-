const db = require("../helper/db.helper");

const getProfile = (id, cb) => {
  const sql = `SELECT wb."amount", u."email", u."status" FROM "user" u
    JOIN "walletBalance" wb ON wb."id_user" = u.id
    WHERE u.id=$1`;
  const value = [id];
  db.query(sql, value, cb);
};

const getUsersById = async (id) => {
  try {
    const sql = 'SELECT * FROM "user" WHERE id = $1';
    const newUsers = await db.query(sql, [id]);
    return newUsers.rows[0];
  } catch (error) {
    if (error) throw error;
  }
};

const updateUsers = async (data, id) => {
  try {
    const sql = `UPDATE "user" SET "email" = COALESCE(NULLIF($1, ''), "email") WHERE id= $2 RETURNING *`;
    const values = [data, id];
    const newUser = await db.query(sql, values);
    return newUser.rows[0];
  } catch (error) {
    if (error) throw error;
  }
};

module.exports = { getProfile, updateUsers, getUsersById };
