const route = require("./Routes/userdata");
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const dotenv = require("dotenv")
const sequelize = require("./Sequalize/sequalize");
const app = express();
app.use(cors());

dotenv.config();
app.use(express.json())


// Synchronize models with the database (force:false means no data loss)


sequelize
  .sync()
  .then(() => {
    console.log("success");
  })
  .catch((error) => {
    console.log(error);
  });


app.use(route)

app.listen(8001, () => {
  console.log("Listening...");
});
