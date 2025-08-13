import { Router } from "express";
import { getDB } from "../db/config.js";

router.post("/registerrecipe", async function (req, res) {
    try {
      const { id, nombre, habilidad, debilitado } = req.body;
      if (!id || !nombre || !habilidad || debilitado === undefined) {
        res.status(400).json({ error: "Invalid input!" });
      }
      const pokemon = {
        id,
        nombre,
        habilidad,
        debilitado,
      };
      await getDB().collection("pokemones").insertOne(pokemon);
      res.status(201).json({ message: "Pokemon created!!" });
    } catch (error) {
      res.error(500).json({ error: "Internal server error" });
    }
  });

export default router;
