const db = require("../helper/db.helper");

const getUsersById = async (id) => {
  try {
    const sql = 'SELECT * FROM "user" WHERE id = $1';
    const newUsers = await db.query(sql, [id]);
    return newUsers.rows[0];
  } catch (error) {
    if (error) throw error;
  }
};

const topUpWallet = async (data) => {
  try {
    const sql =
      'INSERT INTO "walletBalance"("id_user", "id_currency", "amount") VALUES($1, $2, $3) RETURNING *';
    const value = [data.id, data.idCurrency, data.amount];
    const topUpBalance = await db.query(sql, value);
    return topUpBalance.rows[0];
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getUsersById, topUpWallet };
