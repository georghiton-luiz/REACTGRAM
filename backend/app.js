require("dotenv").config();
require("./config/db.js");

const express = require("express");
const path = require("path");
const cors = require("cors");
//routes
const router = require("./routes/Router");

const port = process.env.PORT;

const app = express();

//config JSON and form data response
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Solve CORS
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

//Uploads directory
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

//routes
app.use(router);

app.listen(port, () => {
  console.log(`App rodando no link http://localhost:${port}`);
});
