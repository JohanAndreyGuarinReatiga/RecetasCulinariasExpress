// imports
import dotenv from "dotenv";
import express from "express";
import usersRouter from "./routers/usersRouter.js";
// import recipesRouter from "./routers/recipesRouter.js"
// import ingredientsRouter from "./routers/ingredientsRouter.js"
import { connect } from "./db/config.js";

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());

// Rutas
app.use("/users", usersRouter);
// app.use("/recipe", recipesRouter);
// app.use("/ingredients", ingredientsRouter);

//endpoints
app.get("/api", function (req, res) {
    res.send("Api OK!");
  });
  

connect().then(() => {
  app.listen(port, () => {
    console.log("http://localhost:" + port + "/api");
  });
});
