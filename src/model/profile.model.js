const db = require('../helper/db.helper')

const getProfile = (id, cb) => {
    const sql = `SELECT wb."amount", u."email", u."status" FROM "user" u
    JOIN "walletBalance" wb ON wb."id_user" = u.id
    WHERE u.id=$1`;
    const value = [id];
    db.query(sql, value, cb);
  };

module.exports = getProfile