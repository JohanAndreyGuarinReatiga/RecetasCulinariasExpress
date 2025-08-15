import { Router } from "express";
import { ObjectId } from "mongodb";
import { getDB } from "../db/config.js";

const router = Router();

// Agregar ingredientes a una receta existente
//  (cada ingrediente tendrá un nombre y estará vinculado a una receta).
router.post("/addingredient", async function (req, res) {
  try {
    const { name, recipeId } = req.body;
    if (!name || !recipeId) {
      res.status(400).json({ error: "Invalid input!" });
    }
    const recipe = await getDB().collection("recipes").findOne({ _id: new ObjectId(recipeId) });
    if (!recipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }
    const ingredient = {
      _id: new ObjectId(),
      recipeId: new ObjectId(recipeId),
      name
    };
    await getDB().collection("ingredients").insertOne(ingredient);
    res.status(201).json({ message: "ingredient added!!", ingredientId: ingredient._id });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
})

// Ver todos los ingredientes de una receta.
router.get("/getingredients/:title", async function (req, res) {
  try {
    const { title } = req.params;

    const recipe = await getDB().collection("recipes").findOne({ title: title });
    if (!recipe) {
      return res.status(404).json({ error: "Recipe doesn't exist" });
    }

    const ingredients = await getDB()
      .collection("ingredients")
      .find({ recipeId: recipe._id })
      .toArray();

    res.status(200).json(ingredients);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});


// Eliminar ingredientes de una receta.

router.delete("/deleteingredients/:nameIngredient", async function (req, res) {
  try {
    const { nameIngredient } = req.params;
    const result = await getDB()
      .collection("ingredients")
      .deleteOne({ name: nameIngredient });
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Ingredient doesn't exist!" });
    }
    res.status(200).json({ response: "ingredient deleted" });
  } catch (er) {
    res.status(500).json({ error: "Internal server error" });
  }

})


// Buscar todas las recetas que contengan un 
// ingrediente específico (ej. “pollo” muestra todas las recetas que lo usan).

router.get("/recipesbyingredient/:name", async function (req, res) {

  try {
    const { name } = req.params;

    const specificIngred = await getDB()
      .collection("ingredients")
      .aggregate([
        {
          $match: {
            name: { $regex: name, $options: "i" }
          }
        },
        {
          $lookup: {
            from: "recipes",
            localField: "recipeId",
            foreignField: "_id",
            as: "recipes"
          }
        },
        {
          $project: {
            _id: 0,
            ingredient: "$name",
            recipeTitle: "$recipes.title",
            recipesDescription: "$recipes.description"
          }
        }
      ]).toArray()

      res.status(200).json({ specificIngred });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});


export default router;
