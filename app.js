// imports
import dotenv from "dotenv";
import express from "express";

import { connect } from "./db/config.js";

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());

// Rutas
// app.use("/recetas", recetasRouter);

//endpoints
app.get("/api", function (req, res) {
    res.send("Api OK!");
  });
  

connect().then(() => {
  app.listen(port, () => {
    console.log("http://localhost:" + port + "/api");
  });
});
