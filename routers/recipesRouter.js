import { Router } from "express";
import { ObjectId } from "mongodb";
import { getDB } from "../db/config.js";

const router = Router();
  // - Permitir que un usuario pueda registrar una nueva receta con su título y descripción.
router.post("/registerrecipe/:userId", async function (req, res) {
    try {
        const { title, description} = req.body;
        const {userId} = req.params;
        if (!userId || !title || !description) {
          return res.status(400).json({ error: "Invalid input" });
        }
        const recipe = {
            _id: new ObjectId(),
            userId: new ObjectId(userId),
            title,
            description,
            createdAt: new Date(),
            updatedAt: new Date()

        };
        await getDB().collection("recipes").insertOne(recipe);
        res.status(201).json({ message: "recipe registered!!", recipeId: recipe._id});
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});


export default router;
