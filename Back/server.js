const express = require("express");
const app = express();
const bodyParser = require("body-parser");


const userRoute = require("../back/Routes/user_routes");

// en lien avec le rooter pour l'importer
app.use("/user", userRoute);

// etape 2
app.use(bodyParser.json());

app.listen(3030, () => 
{
console.log("okay man")
});

// node server js
// autre dependance dont on a besoin bodyparser : npm i --save bodyparser : permet d'accès au corps de la requete


