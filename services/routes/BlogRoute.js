import { Router } from "express";

export const BlogRoute = Router();

BlogRoute.get("/", async(req, res) => {
    res.send("Lista autori")
});

BlogRoute.get("/:id", async(req, res) => {
    res.send("Autore Specifico")
});

BlogRoute.post("/", async(req, res) => {
    res.send("Crea nuovo autore")
});