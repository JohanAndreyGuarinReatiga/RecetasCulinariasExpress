// dataset.js
import { ObjectId } from "mongodb";
import { connect, getDB } from "./config.js";

async function seed() {
  // ids for reference
  const userIds = {
    john: new ObjectId(),
    mary: new ObjectId(),
    charles: new ObjectId(),
    anna: new ObjectId(),
    sophia: new ObjectId(),
  };

  const recipeIds = {
    bakedChicken: new ObjectId(),
    caesarSalad: new ObjectId(),
    chickenTacos: new ObjectId(),
    pestoPasta: new ObjectId(),
    stuffedArepas: new ObjectId(),
    vegetableSoup: new ObjectId(),
    chickenRice: new ObjectId(),
    brownies: new ObjectId(),
    shrimpCeviche: new ObjectId(),
    oatmealPancakes: new ObjectId(),
  };

  const now = new Date();

  const users = [
    {
      _id: userIds.john,
      fullName: "John Perez",
      username: "johnperez",
      email: "john.perez@gmail.com",
      createdAt: now,
    },
    {
      _id: userIds.mary,
      fullName: "Mary Gomez",
      username: "maryg",
      email: "mary.gomez@gmail.com",
      createdAt: now,
    },
    {
      _id: userIds.charles,
      fullName: "Charles Ruiz",
      username: "charlie",
      email: "charles.ruiz@gmail.com",
      createdAt: now,
    },
    {
      _id: userIds.anna,
      fullName: "Anna Lopez",
      username: "annalopez",
      email: "anna.lopez@gmail.com",
      createdAt: now,
    },
    {
      _id: userIds.sophia,
      fullName: "Sophia Martinez",
      username: "sophiamm",
      email: "sophia.martinez@gmail.com",
      createdAt: now,
    },
  ];

  const recipes = [
    {
      _id: recipeIds.bakedChicken,
      userId: userIds.john,
      title: "Baked Chicken with Potatoes",
      description: "Chicken marinated with garlic and lemon, baked with potatoes and rosemary.",
      createdAt: now,
      updatedAt: now,
    },
    {
      _id: recipeIds.caesarSalad,
      userId: userIds.mary,
      title: "Caesar Salad",
      description: "Classic salad with romaine lettuce, croutons, and creamy dressing.",
      createdAt: now,
      updatedAt: now,
    },
    {
      _id: recipeIds.chickenTacos,
      userId: userIds.charles,
      title: "Chicken Tacos",
      description: "Corn tortillas filled with seasoned chicken, pico de gallo, and avocado.",
      createdAt: now,
      updatedAt: now,
    },
    {
      _id: recipeIds.pestoPasta,
      userId: userIds.anna,
      title: "Pesto Pasta",
      description: "Fusilli with basil pesto, parmesan, and toasted pine nuts.",
      createdAt: now,
      updatedAt: now,
    },
    {
      _id: recipeIds.stuffedArepas,
      userId: userIds.sophia,
      title: "Stuffed Arepas",
      description: "Corn arepas stuffed with cheese and hogao, perfect for breakfast.",
      createdAt: now,
      updatedAt: now,
    },
    {
      _id: recipeIds.vegetableSoup,
      userId: userIds.john,
      title: "Vegetable Soup",
      description: "Light broth with carrot, celery, potato, and zucchini, seasoned with bay leaf.",
      createdAt: now,
      updatedAt: now,
    },
    {
      _id: recipeIds.chickenRice,
      userId: userIds.mary,
      title: "Chicken Rice",
      description: "Yellow rice with shredded chicken, vegetables, and cilantro.",
      createdAt: now,
      updatedAt: now,
    },
    {
      _id: recipeIds.brownies,
      userId: userIds.charles,
      title: "Chocolate Brownies",
      description: "Moist chocolate brownies with nuts, perfect for dessert.",
      createdAt: now,
      updatedAt: now,
    },
    {
      _id: recipeIds.shrimpCeviche,
      userId: userIds.anna,
      title: "Shrimp Ceviche",
      description: "Shrimp marinated in lime juice with red onion and cilantro.",
      createdAt: now,
      updatedAt: now,
    },
    {
      _id: recipeIds.oatmealPancakes,
      userId: userIds.sophia,
      title: "Oatmeal Pancakes",
      description: "Healthy oatmeal and banana pancakes, perfect with honey.",
      createdAt: now,
      updatedAt: now,
    },
  ];

  const ingredients = [
    // Baked Chicken with Potatoes
    { _id: new ObjectId(), recipeId: recipeIds.bakedChicken, name: "chicken" },
    { _id: new ObjectId(), recipeId: recipeIds.bakedChicken, name: "potatoes" },
    { _id: new ObjectId(), recipeId: recipeIds.bakedChicken, name: "garlic" },
    { _id: new ObjectId(), recipeId: recipeIds.bakedChicken, name: "lemon" },
    { _id: new ObjectId(), recipeId: recipeIds.bakedChicken, name: "rosemary" },
    { _id: new ObjectId(), recipeId: recipeIds.bakedChicken, name: "salt" },
    { _id: new ObjectId(), recipeId: recipeIds.bakedChicken, name: "pepper" },

    // Caesar Salad
    { _id: new ObjectId(), recipeId: recipeIds.caesarSalad, name: "romaine lettuce" },
    { _id: new ObjectId(), recipeId: recipeIds.caesarSalad, name: "croutons" },
    { _id: new ObjectId(), recipeId: recipeIds.caesarSalad, name: "parmesan" },
    { _id: new ObjectId(), recipeId: recipeIds.caesarSalad, name: "chicken breast" },
    { _id: new ObjectId(), recipeId: recipeIds.caesarSalad, name: "caesar dressing" },

    // Chicken Tacos
    { _id: new ObjectId(), recipeId: recipeIds.chickenTacos, name: "chicken" },
    { _id: new ObjectId(), recipeId: recipeIds.chickenTacos, name: "corn tortillas" },
    { _id: new ObjectId(), recipeId: recipeIds.chickenTacos, name: "onion" },
    { _id: new ObjectId(), recipeId: recipeIds.chickenTacos, name: "tomato" },
    { _id: new ObjectId(), recipeId: recipeIds.chickenTacos, name: "avocado" },
    { _id: new ObjectId(), recipeId: recipeIds.chickenTacos, name: "cilantro" },
    { _id: new ObjectId(), recipeId: recipeIds.chickenTacos, name: "lime" },

    // Pesto Pasta
    { _id: new ObjectId(), recipeId: recipeIds.pestoPasta, name: "pasta" },
    { _id: new ObjectId(), recipeId: recipeIds.pestoPasta, name: "basil" },
    { _id: new ObjectId(), recipeId: recipeIds.pestoPasta, name: "parmesan" },
    { _id: new ObjectId(), recipeId: recipeIds.pestoPasta, name: "pine nuts" },
    { _id: new ObjectId(), recipeId: recipeIds.pestoPasta, name: "garlic" },
    { _id: new ObjectId(), recipeId: recipeIds.pestoPasta, name: "olive oil" },

    // Stuffed Arepas
    { _id: new ObjectId(), recipeId: recipeIds.stuffedArepas, name: "corn flour" },
    { _id: new ObjectId(), recipeId: recipeIds.stuffedArepas, name: "cheese" },
    { _id: new ObjectId(), recipeId: recipeIds.stuffedArepas, name: "butter" },
    { _id: new ObjectId(), recipeId: recipeIds.stuffedArepas, name: "salt" },
    { _id: new ObjectId(), recipeId: recipeIds.stuffedArepas, name: "hogao" },

    // Vegetable Soup
    { _id: new ObjectId(), recipeId: recipeIds.vegetableSoup, name: "carrot" },
    { _id: new ObjectId(), recipeId: recipeIds.vegetableSoup, name: "celery" },
    { _id: new ObjectId(), recipeId: recipeIds.vegetableSoup, name: "potato" },
    { _id: new ObjectId(), recipeId: recipeIds.vegetableSoup, name: "zucchini" },
    { _id: new ObjectId(), recipeId: recipeIds.vegetableSoup, name: "bay leaf" },

    // Chicken Rice
    { _id: new ObjectId(), recipeId: recipeIds.chickenRice, name: "rice" },
    { _id: new ObjectId(), recipeId: recipeIds.chickenRice, name: "chicken" },
    { _id: new ObjectId(), recipeId: recipeIds.chickenRice, name: "carrot" },
    { _id: new ObjectId(), recipeId: recipeIds.chickenRice, name: "bell pepper" },
    { _id: new ObjectId(), recipeId: recipeIds.chickenRice, name: "peas" },
    { _id: new ObjectId(), recipeId: recipeIds.chickenRice, name: "cilantro" },

    // Chocolate Brownies
    { _id: new ObjectId(), recipeId: recipeIds.brownies, name: "chocolate" },
    { _id: new ObjectId(), recipeId: recipeIds.brownies, name: "butter" },
    { _id: new ObjectId(), recipeId: recipeIds.brownies, name: "sugar" },
    { _id: new ObjectId(), recipeId: recipeIds.brownies, name: "eggs" },
    { _id: new ObjectId(), recipeId: recipeIds.brownies, name: "flour" },
    { _id: new ObjectId(), recipeId: recipeIds.brownies, name: "nuts" },

    // Shrimp Ceviche
    { _id: new ObjectId(), recipeId: recipeIds.shrimpCeviche, name: "shrimp" },
    { _id: new ObjectId(), recipeId: recipeIds.shrimpCeviche, name: "lime" },
    { _id: new ObjectId(), recipeId: recipeIds.shrimpCeviche, name: "red onion" },
    { _id: new ObjectId(), recipeId: recipeIds.shrimpCeviche, name: "cilantro" },
    { _id: new ObjectId(), recipeId: recipeIds.shrimpCeviche, name: "tomato" },

    // Oatmeal Pancakes
    { _id: new ObjectId(), recipeId: recipeIds.oatmealPancakes, name: "oatmeal" },
    { _id: new ObjectId(), recipeId: recipeIds.oatmealPancakes, name: "banana" },
    { _id: new ObjectId(), recipeId: recipeIds.oatmealPancakes, name: "egg" },
    { _id: new ObjectId(), recipeId: recipeIds.oatmealPancakes, name: "milk" },
    { _id: new ObjectId(), recipeId: recipeIds.oatmealPancakes, name: "baking powder" },
  ];

  await connect();

  await getDB().collection("ingredients").deleteMany({});
  await getDB().collection("recipes").deleteMany({});
  await getDB().collection("users").deleteMany({});

  await getDB().collection("users").insertMany(users);
  await getDB().collection("recipes").insertMany(recipes);
  await getDB().collection("ingredients").insertMany(ingredients);

  console.log("🆗 Dataset loaded");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed error", err);
  process.exit(1);
});