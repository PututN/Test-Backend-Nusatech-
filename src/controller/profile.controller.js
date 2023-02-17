const getProfile = require('../model/profile.model')
const jwt = require("jsonwebtoken");


const getProfileId = (req, res) => {
    const authorization = req.headers.authorization;
    const token = authorization.split(" ")[1];
    const validated = jwt.verify(token, "backend-secret");
    const { id } = validated;
    getProfile(id, (err, data) => {
      if (err) {
        console.log(err);
      }
      return res.status(200).json({
        success: true,
        message: "Data user ID success",
        results: data.rows[0],
      });
    });
  };

  module.exports = getProfileId