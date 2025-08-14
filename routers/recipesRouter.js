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

// Listar todas las recetas disponibles en la plataforma.
router.get("/getallrecipes", async function (req, res) {
  try {
    const recipes = await getDB().collection("recipes").find().toArray();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
})

// Consultar una receta en específico poir el nombre o sea el titulo, con todos sus ingredientes.

router.get("/getrecipe/:title", async function (req, res) {
  try {
      const {title} = req.params;
      const recipe = await getDB()
      .collection("recipes")
      .aggregate([
        { $match: { title: title } },
        {
          $lookup: {
            from: "ingredients",
            localField: "_id",
            foreignField: "recipeId",
            as: "ingredients"
          }
        }
      ])
      .toArray();
      if(!recipe || recipe.length === 0){
        res.status(404).json({error: " Recipe doesnt exist"})
      }
      res.status(200).json(recipe[0])
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
});

// Editar el título o descripción de una receta.

router.put("/updaterecipe/:id", async function (req, res) {
  try {
    const { id } = req.params;
    const { title, description} = req.body;

    if (!ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid recipe id" });
    }

    // al menos un campo para actualizar
    if (!title && !description) {
        return res.status(400).json({ error: "No fields to update" });
    }

    const updateFields = {};
    if (title) updateFields.title = title;
    if (description) updateFields.description = description;
    updateFields.updatedAt = new Date();

    const result = await getDB().collection("recipes").updateOne(
        { _id: new ObjectId(id) },
        { $set: updateFields },
    );

    if (result.matchedCount === 0) {
        return res.status(404).json({ error: "Recipe not found" });
    }

    res.status(200).json({ message: "Recipe updated" });
} catch (error) {
    res.status(500).json({ error: "Internal server error" });
}
  
})

// Eliminar una receta.
router.delete("/deleterecipe/:identifier", async function (req, res) {
  try {
    const { identifier } = req.params;

    let filter = {};
    if (ObjectId.isValid(identifier)) {
        filter._id = new ObjectId(identifier);
    } else {
        filter.title = identifier;
    }

    const result = await getDB().collection("recipes").deleteOne(filter);
    if (result.deletedCount === 0) {
        return res.status(404).json({ error: "Recipe not found" });
    }
    res.status(200).json({response: "recipe deleted"});
  } catch (er) {
    res.status(500).json({ error: "Internal server error" });
  }
})

// Listar todas las recetas que pertenecen a un usuario específico (ej. “ver todas las recetas de Juan Pérez”).

router.get("/recipebyuser/:username", async function (req, res){
  try {
    const uName = (req.params.username);

    const user = await getDB()
      .collection("users")
      .findOne({ username: uName });
    if (!user) {
      res.status(404).json({ error: "user doesn't exists!" });
    }
    const recipes = await getDB().collection("recipes").find({userId: user._id}).toArray();
    if (recipes.length === 0) {
      return res.status(404).json({ error: "No recipes found for this user." });
    }
    res.status(200).json(recipes);
  } catch (er) {
    res.status(500).json({ error: "Internal server error" });
  }
})

export default router;
