const { topUpWallet, getUsersById } = require("../model/walletBalance.model");
const argon = require("argon2");
const jwt = require("jsonwebtoken");

const topUp = async (req, res) => {
  try {
    const authorization = req.headers.authorization;
    const token = authorization.split(" ")[1];
    const validated = jwt.verify(token, "backend-secret");
    const { id } = validated;
    const user = await getUsersById(id);
    console.log(user);
    const data = {
        id : user.id,
        amount : req.body.amount,
        idCurrency : req.body.id_currency
    }
    const topUpUser = await topUpWallet(data)
    // const setUser = await updateUsers(req.body, req.userData.id);
    // const newPassword = await argon.hash(setUser.password);
    // const putPassword = await updatePassword(newPassword, req.userData.id);
    return res.status(200).json({
      success: true,
      message: "top up sukses",
      results: topUpUser,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = topUp;
