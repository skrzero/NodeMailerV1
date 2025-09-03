import express from "express";
<<<<<<< HEAD
import bodyParser from "body-parser";
import { body, validationResult } from "express-validator";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/welcome", (req, res) => {
  res.send(`
    <form method="POST" action="/welcome">
      <input type="text" name="name" placeholder="Nom" />
      <input type="email" name="email" placeholder="Email" />
      <button type="submit">Envoyer</button>
    </form>
  `);
});

app.post(
  "/welcome",
  [
    body("name").isLength({ min: 2}).withMessage("nom trop court"),
    body("email").isEmail().withMessage("Email invalide")
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send("Erreur: " + JSON.stringify(errors.array()));
    }

    const { name, email } = req.body;
  }
);

app.listen(3000, () => console.log("http://localhost:3000/welcome"));
=======
import dotenv from "dotenv";

//#region import ROUTES
import { userRoutes } from "./routes/user.route.js";
//#endregion

import UserRepository from "./modules/user.module.repository.js";
import UserController from "./modules/user.module.controller.js";

import initDB from "./config/config.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

async function startServer() {
  try {
    const db = await initDB();

    const userRepository = new UserRepository(db);
    const userController = new UserController(userRepository);

    app.use("/users", userRoutes(userController));

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });

  } catch (error) {
    console.error("Failed to start server:", error);
  }
}

// Lancer le serveur
startServer();
>>>>>>> 118213cf73e6675ab368c6dd0b87c4be88afb15f
