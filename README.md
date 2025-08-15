# Plataforma de Recetas Culinarias

API REST desarrollada con **Node.js**, **Express** y **MongoDB** que permite gestionar usuarios, recetas e ingredientes.  
Los usuarios pueden registrar recetas, añadir ingredientes, buscar recetas por ingrediente y consultar todas las recetas de un usuario en particular.

---

## Tecnologías utilizadas

- **Node.js** (entorno de ejecución)
- **Express** (framework para API REST)
- **MongoDB** (base de datos NoSQL)
- **Dotenv** (manejo de variables de entorno)

---

## Estructura del proyecto

proyecto-recetas  
┣ 📂 routes          # Rutas separadas por funcionalidad  
┣ 📂 db              # Configuración de la base de datos  
┣ 📂 dataset         # Script con datos de prueba  
┣ 📜 .env            # Variables de entorno  
┣ 📜 app.js          # Punto de entrada de la API  
┗ 📜 README.md       # Documentación  

## Instalar dependencias
```bash
npm install
```

Configurar variables de entorno (.env)

```bash
MONGO_URI=mongodb://localhost:27017/recetas
PORT=3000
DB_NAME=culinary-recipes
```

Insertar datos de prueba

```bash
node dataset/dataset.js
```

Iniciar el servidor

```bash
npm start
```

## Endpoints

La documentación completa de la API está disponible en el siguiente enlace:

**[Documentación en Postman](https://documenter.getpostman.com/view/42985684/2sB3BHjTnE )** 

### Gestión de Usuarios

- **POST** `/users` → Registrar usuario  
- **GET** `/users` → Listar usuarios  
- **GET** `/users/:id` → Ver usuario por ID  
- **PUT** `/users/:id` → Actualizar usuario  
- **DELETE** `/users/:id` → Eliminar usuario y sus recetas  

---

### Gestión de Recetas

- **POST** `/recipes` → Crear receta  
- **GET** `/recipes` → Listar todas las recetas  
- **GET** `/recipes/:id` → Ver receta con ingredientes  
- **PUT** `/recipes/:id` → Editar receta  
- **DELETE** `/recipes/:id` → Eliminar receta  
- **GET** `/users/:id/recipes` → Listar recetas de un usuario  

---

### Gestión de Ingredientes

- **POST** `/ingredients` → Agregar ingredientes a una receta  
- **GET** `/recipes/:id/ingredients` → Listar ingredientes de una receta  
- **DELETE** `/recipes/:id/ingredients/:ingredientId` → Eliminar ingrediente  
- **GET** `/recipesbyingredient/:name` → Buscar recetas por ingrediente  

---

## Video demostrativo

En este video se muestra el funcionamiento completo de la API usando **Postman**

📌 **[Ver video aquí](https://www.canva.com/design/DAGwG1sVCkc/azsxG-k7YUQSyiXmvfXTyQ/edit?utm_content=DAGwG1sVCkc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)**  

## autores:
- Johan Andrey Guarin
- Jose Julian Ortega
- David Alberto Medina