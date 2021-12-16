const express = require('express');
const app = express();
const path = require('path');
const cors = require("cors");
const pool = require("./database")

app.use(cors());
app.use(express.json());

app.use("/auth", require("./routes/jwtAuth"));
app.use("/dashboard", require("./routes/dashboard"));

app.listen(process.env.PORT || 5000);
console.log("server on!");