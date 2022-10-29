const express = require("express");
const dotenv = require("dotenv");

const routes = require("./routes");

const app = express();
const port = 3001;

app.use(express.json());

dotenv.config();

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server is Running on Port ${process.env.port}`);
});
