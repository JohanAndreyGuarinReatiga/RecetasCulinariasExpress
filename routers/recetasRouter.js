import { Router } from "express";
import { getDB } from "../db/config.js";

const router = Router();

router.get("/getallusers", async function (req, res) {
    try {
      const users = await getDB().collection("users").find().toArray();
      res.status(200).json(users);
    } catch (error) {
      res.error(500).json({ error: "Internal server error" });
    }
  });