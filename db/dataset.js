// dataset.js
import { ObjectId } from "mongodb";
import { connect, getDB } from "./config.js";

async function seed() {
  // id para referenciar
  const userIds = {
    juan: new ObjectId(),
    maria: new ObjectId(),
    carlos: new ObjectId(),
    ana: new ObjectId(),
    sofia: new ObjectId(),
  };

  const recipeIds = {
    polloHorno: new ObjectId(),
    ensaladaCesar: new ObjectId(),
    tacosPollo: new ObjectId(),
    pastaPesto: new ObjectId(),
    arepasRellenas: new ObjectId(),
    sopaVerduras: new ObjectId(),
    arrozPollo: new ObjectId(),
    brownies: new ObjectId(),
    cevicheCamaron: new ObjectId(),
    panquequesAvena: new ObjectId(),
  };

  const now = new Date();

  const usuarios = [
    {
      _id: userIds.juan,
      nombreCompleto: "Juan Pérez",
      username: "juanperez",
      email: "juan.perez@gmail.com",
      createdAt: now,
    },
    {
      _id: userIds.maria,
      nombreCompleto: "María Gómez",
      username: "mariag",
      email: "maria.gomez@gmail.com",
      createdAt: now,
    },
    {
      _id: userIds.carlos,
      nombreCompleto: "Carlos Ruiz",
      username: "carlitos",
      email: "carlos.ruiz@gmail.com",
      createdAt: now,
    },
    {
      _id: userIds.ana,
      nombreCompleto: "Ana López",
      username: "analopez",
      email: "ana.lopez@gmail.com",
      createdAt: now,
    },
    {
      _id: userIds.sofia,
      nombreCompleto: "Sofía Martínez",
      username: "sofimm",
      email: "sofia.martinez@gmail.com",
      createdAt: now,
    },
  ];

  const recetas = [
    {
      _id: recipeIds.polloHorno,
      userId: userIds.juan,
      titulo: "Pollo al Horno con Papas",
      descripcion:
        "Pollo marinado con ajo y limón, horneado con papas y romero.",
      createdAt: now,
      updatedAt: now,
    },
    {
      _id: recipeIds.ensaladaCesar,
      userId: userIds.maria,
      titulo: "Ensalada César",
      descripcion:
        "Clásica ensalada con lechuga romana, crutones y aderezo cremoso.",
      createdAt: now,
      updatedAt: now,
    },
    {
      _id: recipeIds.tacosPollo,
      userId: userIds.carlos,
      titulo: "Tacos de Pollo",
      descripcion:
        "Tortillas de maíz rellenas con pollo sazonado, pico de gallo y aguacate.",
      createdAt: now,
      updatedAt: now,
    },
    {
      _id: recipeIds.pastaPesto,
      userId: userIds.ana,
      titulo: "Pasta al Pesto",
      descripcion:
        "Fusilli con pesto de albahaca, parmesano y piñones tostados.",
      createdAt: now,
      updatedAt: now,
    },
    {
      _id: recipeIds.arepasRellenas,
      userId: userIds.sofia,
      titulo: "Arepas Rellenas",
      descripcion:
        "Arepas de maíz rellenas de queso y hogao, perfectas para el desayuno.",
      createdAt: now,
      updatedAt: now,
    },
    {
      _id: recipeIds.sopaVerduras,
      userId: userIds.juan,
      titulo: "Sopa de Verduras",
      descripcion:
        "Caldo ligero con zanahoria, apio, papa y calabacín, sazonado con laurel.",
      createdAt: now,
      updatedAt: now,
    },
    {
      _id: recipeIds.arrozPollo,
      userId: userIds.maria,
      titulo: "Arroz con Pollo",
      descripcion:
        "Arroz amarillo con pollo desmechado, verduras y cilantro.",
      createdAt: now,
      updatedAt: now,
    },
    {
      _id: recipeIds.brownies,
      userId: userIds.carlos,
      titulo: "Brownies de Chocolate",
      descripcion:
        "Brownies húmedos de chocolate con nueces, ideales para postre.",
      createdAt: now,
      updatedAt: now,
    },
    {
      _id: recipeIds.cevicheCamaron,
      userId: userIds.ana,
      titulo: "Ceviche de Camarón",
      descripcion:
        "Camarones marinados en jugo de limón con cebolla morada y cilantro.",
      createdAt: now,
      updatedAt: now,
    },
    {
      _id: recipeIds.panquequesAvena,
      userId: userIds.sofia,
      titulo: "Panqueques de Avena",
      descripcion:
        "Panqueques saludables de avena y banano, perfectos con miel.",
      createdAt: now,
      updatedAt: now,
    },
  ];

  const ingredientes = [
    // Pollo al Horno con Papas
    { _id: new ObjectId(), recipeId: recipeIds.polloHorno, nombre: "pollo" },
    { _id: new ObjectId(), recipeId: recipeIds.polloHorno, nombre: "papas" },
    { _id: new ObjectId(), recipeId: recipeIds.polloHorno, nombre: "ajo" },
    { _id: new ObjectId(), recipeId: recipeIds.polloHorno, nombre: "limón" },
    { _id: new ObjectId(), recipeId: recipeIds.polloHorno, nombre: "romero" },
    { _id: new ObjectId(), recipeId: recipeIds.polloHorno, nombre: "sal" },
    { _id: new ObjectId(), recipeId: recipeIds.polloHorno, nombre: "pimienta" },

    // Ensalada César
    { _id: new ObjectId(), recipeId: recipeIds.ensaladaCesar, nombre: "lechuga romana" },
    { _id: new ObjectId(), recipeId: recipeIds.ensaladaCesar, nombre: "crutones" },
    { _id: new ObjectId(), recipeId: recipeIds.ensaladaCesar, nombre: "parmesano" },
    { _id: new ObjectId(), recipeId: recipeIds.ensaladaCesar, nombre: "pechuga de pollo" },
    { _id: new ObjectId(), recipeId: recipeIds.ensaladaCesar, nombre: "aderezo césar" },

    // Tacos de Pollo
    { _id: new ObjectId(), recipeId: recipeIds.tacosPollo, nombre: "pollo" },
    { _id: new ObjectId(), recipeId: recipeIds.tacosPollo, nombre: "tortillas de maíz" },
    { _id: new ObjectId(), recipeId: recipeIds.tacosPollo, nombre: "cebolla" },
    { _id: new ObjectId(), recipeId: recipeIds.tacosPollo, nombre: "tomate" },
    { _id: new ObjectId(), recipeId: recipeIds.tacosPollo, nombre: "aguacate" },
    { _id: new ObjectId(), recipeId: recipeIds.tacosPollo, nombre: "cilantro" },
    { _id: new ObjectId(), recipeId: recipeIds.tacosPollo, nombre: "limón" },

    // Pasta al Pesto
    { _id: new ObjectId(), recipeId: recipeIds.pastaPesto, nombre: "pasta" },
    { _id: new ObjectId(), recipeId: recipeIds.pastaPesto, nombre: "albahaca" },
    { _id: new ObjectId(), recipeId: recipeIds.pastaPesto, nombre: "parmesano" },
    { _id: new ObjectId(), recipeId: recipeIds.pastaPesto, nombre: "piñones" },
    { _id: new ObjectId(), recipeId: recipeIds.pastaPesto, nombre: "ajo" },
    { _id: new ObjectId(), recipeId: recipeIds.pastaPesto, nombre: "aceite de oliva" },

    // Arepas Rellenas
    { _id: new ObjectId(), recipeId: recipeIds.arepasRellenas, nombre: "harina de maíz" },
    { _id: new ObjectId(), recipeId: recipeIds.arepasRellenas, nombre: "queso" },
    { _id: new ObjectId(), recipeId: recipeIds.arepasRellenas, nombre: "mantequilla" },
    { _id: new ObjectId(), recipeId: recipeIds.arepasRellenas, nombre: "sal" },
    { _id: new ObjectId(), recipeId: recipeIds.arepasRellenas, nombre: "hogao" },

    // Sopa de Verduras
    { _id: new ObjectId(), recipeId: recipeIds.sopaVerduras, nombre: "zanahoria" },
    { _id: new ObjectId(), recipeId: recipeIds.sopaVerduras, nombre: "apio" },
    { _id: new ObjectId(), recipeId: recipeIds.sopaVerduras, nombre: "papa" },
    { _id: new ObjectId(), recipeId: recipeIds.sopaVerduras, nombre: "calabacín" },
    { _id: new ObjectId(), recipeId: recipeIds.sopaVerduras, nombre: "laurel" },

    // Arroz con Pollo
    { _id: new ObjectId(), recipeId: recipeIds.arrozPollo, nombre: "arroz" },
    { _id: new ObjectId(), recipeId: recipeIds.arrozPollo, nombre: "pollo" },
    { _id: new ObjectId(), recipeId: recipeIds.arrozPollo, nombre: "zanahoria" },
    { _id: new ObjectId(), recipeId: recipeIds.arrozPollo, nombre: "pimentón" },
    { _id: new ObjectId(), recipeId: recipeIds.arrozPollo, nombre: "guisantes" },
    { _id: new ObjectId(), recipeId: recipeIds.arrozPollo, nombre: "cilantro" },

    // Brownies de Chocolate
    { _id: new ObjectId(), recipeId: recipeIds.brownies, nombre: "chocolate" },
    { _id: new ObjectId(), recipeId: recipeIds.brownies, nombre: "mantequilla" },
    { _id: new ObjectId(), recipeId: recipeIds.brownies, nombre: "azúcar" },
    { _id: new ObjectId(), recipeId: recipeIds.brownies, nombre: "huevos" },
    { _id: new ObjectId(), recipeId: recipeIds.brownies, nombre: "harina" },
    { _id: new ObjectId(), recipeId: recipeIds.brownies, nombre: "nueces" },

    // Ceviche de Camarón
    { _id: new ObjectId(), recipeId: recipeIds.cevicheCamaron, nombre: "camarón" },
    { _id: new ObjectId(), recipeId: recipeIds.cevicheCamaron, nombre: "limón" },
    { _id: new ObjectId(), recipeId: recipeIds.cevicheCamaron, nombre: "cebolla morada" },
    { _id: new ObjectId(), recipeId: recipeIds.cevicheCamaron, nombre: "cilantro" },
    { _id: new ObjectId(), recipeId: recipeIds.cevicheCamaron, nombre: "tomate" },

    // Panqueques de Avena
    { _id: new ObjectId(), recipeId: recipeIds.panquequesAvena, nombre: "avena" },
    { _id: new ObjectId(), recipeId: recipeIds.panquequesAvena, nombre: "banano" },
    { _id: new ObjectId(), recipeId: recipeIds.panquequesAvena, nombre: "huevo" },
    { _id: new ObjectId(), recipeId: recipeIds.panquequesAvena, nombre: "leche" },
    { _id: new ObjectId(), recipeId: recipeIds.panquequesAvena, nombre: "polvo de hornear" },
  ];

  await connect();

  await getDB().collection("ingredientes").deleteMany({});
  await getDB().collection("recetas").deleteMany({});
  await getDB().collection("usuarios").deleteMany({});

  await getDB().collection("usuarios").insertMany(usuarios);
  await getDB().collection("recetas").insertMany(recetas);
  await getDB().collection("ingredientes").insertMany(ingredientes);

  console.log("🆗 Dataset cargado");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Error en seed:", err);
  process.exit(1);
});
