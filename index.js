const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(cors());
app.use(morgan("dev"));
app.use("/", require("./src/routes"));


app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Backend is running well",
  });
});

app.listen(8888, () => {
  console.log(`App listening on port 8888`);
});
