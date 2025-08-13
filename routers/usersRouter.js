import { Router } from "express";
import { ObjectId } from "mongodb";
import { getDB } from "../db/config.js";

const router = Router();

//Registrar nuevos usuarios en la plataforma.

router.post("/registeruser", async function (req, res) {
    try {
        const {fullName, username, email } = req.body;
        if (!fullName || !username || !email) {
            res.status(400).json({ error: "Invalid input!" });
        }
        const user = {
            _id: new ObjectId(),
            fullName,
            username,
            email,
            createdAt: new Date()

        };
        await getDB().collection("users").insertOne(user);
        res.status(201).json({ message: "User registered!!", userId: user._id});
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

// Consultar la lista de todos los usuarios registrados.
router.get("/getallusers", async function (req, res) {
    try {
      const users = await getDB().collection("users").find().toArray();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });

// Ver la información detallada de un usuario en específico.
router.get("/getuser/:username", async function (req, res) {
    try {
        const uName = (req.params.username);
        const user = await getDB()
          .collection("users")
          .findOne({ username: uName });
        if (!user) {
          res.status(404).json({ error: "user doesn't exists!" });
        }
        res.status(200).json(user);
      } catch (er) {
        res.status(500).json({ error: "Internal server error" });
      }
})  

// Actualizar los datos de un usuario.
router.put("/updateuser/:id", async function (req, res) {
    try {
        const { id } = req.params;
        const { fullName, username, email } = req.body;

        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid user id" });
        }

        // al menos un campo para actualizar
        if (!fullName && !username && !email) {
            return res.status(400).json({ error: "No fields to update" });
        }

        const updateFields = {};
        if (fullName) updateFields.fullName = fullName;
        if (username) updateFields.username = username;
        if (email) updateFields.email = email;

        const result = await getDB().collection("users").updateOne(
            { _id: new ObjectId(id) },
            { $set: updateFields }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json({ message: "User updated" });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }

})

// Eliminar un usuario y todas sus recetas asociadas.
router.delete("/deleteuser/:username", async function (req, res) {
    try {
        const uName = (req.params.username);
        const user = await getDB()
          .collection("users")
          .deleteOne({ username: uName });
        if (!user) {
          res.status(404).json({ error: "user doesn't exists!" });
        }
        res.status(200).json({response: "user deleted", user});
      } catch (er) {
        res.status(500).json({ error: "Internal server error" });
      }
    
})

export default router;
