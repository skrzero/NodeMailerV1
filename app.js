import express from "express";
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
