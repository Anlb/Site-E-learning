// mongo fonctionne en collection et pas en table, on doit lui donner des modèles, créer donc un nouveau dossier du coup.

// need moongose pour faire les models


const mongoose = require("mongoose");
// schema = classe, on utilise les schema de moongoose
const Schema =  mongoose.Schema;

// new permet de faire une nouvelle instance d'une cla
// remplacer les clés par des paramètres

const userSchema = new Schema((
// on nomme l'utilisateur on ajoute deux : car c'est un objet
name:String,
// faire ceci pour préciser plusieurs parametres dans un champ
email: {type: String, required: true}, 
password: {type: String, required: true}

));

const userModel = mongoose.model("user", userSchema);

// rendre le code dispo dans un autre fichier

module.exports =  userModel;


// faire les controller ensuite
// et les routes une fois les models faits

