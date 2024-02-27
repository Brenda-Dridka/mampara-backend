const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const permissionsSeeder = require("./src/seeders/permisos-seeder")

dotenv.config();
const app = express();

const routerApi = require("./src/routes");

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

//! Seeders
permissionsSeeder.up()

app.get("/", (req, res) => {
  res.send("Backend con NodeJS - Express + CRUD API REST + MySQL");
});

app.get("/hola", (req, res) => {
  res.send("hola");
});

routerApi(app);

app.listen(port, () => {
  console.log("Port ==> ", port);
});
