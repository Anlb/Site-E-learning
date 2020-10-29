// étape 2 : créer une route, on veut que le back utilise cette méthode là. créer un dossier route ensuite.
// express le rooter, mini version de l'appli, on a besoin d'express :
const express = require("express");
const router = express.Router();
// passer des méthodes à ses routes 

const {createUser} = require("../Controllers/user_controllers");

// autre facon d'écrire les routes; c'est la route pour Postman
router.route("/create")
.get()
.post(createUser) // quand on fera une req vers la route, il va executer la fonction createUser

module.exports = router 