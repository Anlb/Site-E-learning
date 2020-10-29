// installation mongoose ici
const mongoose = require("mongoose");

// où tu dois te co : 

mongoose.connect("", {}) // utilisation de mongoatlas, cliquer sur cluster, cliquer sur connect, connect ur appli, tu c.c le lien,

// cluster et bases de données créer une collection, mongodb permet de cloner des fake données, créer une nouvelle base

mongoose.connection.once("Open, ()" => {
console.log("on est co")

})
//on lui dit ce qui se passe s'il y a une erreur 
.on("error", (error) => {
console.log("on n'est pas co" + error)
}); 

// mongo fonctionne en collection et pas en table, on doit lui donner des modèles, créer donc un nouveau dossier du coup.

