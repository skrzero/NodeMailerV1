import express from "express";
import nodemailer from "nodemailer";
import { body, validationResult } from "express-validator";

const router = express.Router();


router.get("/", (req, res) => {
  res.send(`
    <h1>Inscription</h1>
    <form method="POST" action="/welcome">
      <input type="text" name="name" placeholder="Prénom" required />
      <input type="email" name="email" placeholder="Email" required />
      <button type="submit">Envoyer</button>
    </form>
  `);
});


router.post(
  "/",
  [
    body("name").isLength({ min: 2 }).withMessage("Nom trop court"),
    body("email").isEmail().withMessage("Email invalide"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send("Erreur: " + JSON.stringify(errors.array()));
    }

    const { name, email } = req.body;

    // aide de l'ia a partir de la 
   const transporter = nodemailer.createTransport({
  host: "smtp.example.com", 
  port: 587,                
  secure: false,            
  auth: {
    user: "ton_user_smtp",  
    pass: "ton_pass_smtp",  
  },
});


    const mailOptions = {
      from: '"Mon App" <tonemail@gmail.com>',
      to: email,
      subject: "Bienvenue 🎉",
      html: `<h2>Bonjour ${name},</h2><p>Bienvenue dans notre application !</p>`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.send(`✅ Email de bienvenue envoyé à ${email}`);
    } catch (err) {
      console.error(err);
      res.status(500).send("❌ Erreur lors de l'envoi de l'email");
    }
  }
);

export default router;
