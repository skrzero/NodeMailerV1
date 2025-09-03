import express from "express";
import bodyParser from "body-parser";
import welcomeRoute from "./routes/welcome.route.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/welcome", welcomeRoute);

app.listen(3000, () =>
  console.log("Serveur démarré sur http://localhost:3000/welcome")
);
