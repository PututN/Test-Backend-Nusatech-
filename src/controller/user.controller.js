const {createUsers, selectUserByEmail} = require("../model/user.model");
const argon = require("argon2");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    req.body.password = await argon.hash(req.body.password);
    const user = await createUsers(req.body);
    const token = jwt.sign({ id: user.id }, "backend-secret");
    return res.status(200).json({
      success: true,
      message: "Register Success",
      results: {
        token,
      },
    });
  } catch (error) {
    console.log(error);
    if (error)
      return res.status(500).json({
        success: false,
        message: "Something happend in our backend",
        error : error
      });
  }
};

const login = (req, res) => {
  selectUserByEmail(req.body.email, async (err, { rows }) => {
    if (rows.length) {
      const [user] = rows;
      if (await argon.verify(user.password, req.body.password)) {
        const token = jwt.sign({ id: user.id }, "backend-secret");

        return res.status(200).json({
          success: true,
          message: "login success",
          result: { token },
        });
      } else {
        return res.status(401).json({
          success: false,
          message: "Wrong password or email",
        });
      }
    } else {
      return res.status(401).json({
        success: false,
        message: "Email not registered",
      });
    }
  });
};

module.exports = {register, login};
