
// route pour co la base de données
const data = require ("../Data/data");

// il faut donner le chemin du fichier model
const User = require("..Data/Models/user"); // pas besoin de faire .js

// créer les fonctions avec le CRUD

// on exporte une suite de fonctions

module.exports = {
    // on lui dit ce qu'on veut qu'il fasse quand il crée un utilisateur, on veut créer un nouvel utilisateur basé sur notre schéma
createUser(req, res) {
    const newUser = new User ({
        // quelle valeur récup pour chaque champ, tu récup au corps de la requete, not° via bodyparser (dans le front)
        name: req.body.name, 
        email: req.body.email, 
        password: req.body.motdepasse
    })
    newUser.save()
    // on dit qu'on a terminé
    res.end()
    // on peut rajouter des para pour check les erreurs
}
}

// étape 2 : créer une route, on veut que le back utilise cette méthode là. créer un dossier route ensuite.