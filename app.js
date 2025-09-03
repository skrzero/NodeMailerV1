import express from "express";
import bodyParser from "body-parser";
import welcomeRoute from "./routes/welcome.route.js";

const app = express();

// Middleware pour lire req.body
app.use(bodyParser.urlencoded({ extended: true }));

// Utilisation de la route /welcome
app.use("/welcome", welcomeRoute);

app.listen(3000, () =>
  console.log("🚀 Serveur démarré sur http://localhost:3000/welcome")
);
