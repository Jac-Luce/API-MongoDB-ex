import express  from "express";
import { config } from "dotenv";
import mongoose from "mongoose";
import { BlogRoute } from "./services/routes/BlogRoute.js";

//Inizializziamo la gestione dei file .env
config();

//Crea una porta
const PORT = process.env.PORT || 3001;

//Crea il server
const app = express();

//Abilita la comunicazione con dati JSON
app.use(express.json());

//Importa Routes
app.use("/authors", BlogRoute);


//Abilita server
app.listen(PORT, () => {
    console.log("Il nostro server sta ascoltando alla porta " + PORT);
});