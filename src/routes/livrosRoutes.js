import express from "express";
import LivroController from "../controllers/livroController.js";


const routes = express.Router();

routes.get("/livros", LivroController.listarLivros);
routes.get("/livros/:id", LivroController.buscaLivro);
routes.post("/livros", LivroController.listarLivros);
routes.put("/livros", LivroController.listarLivros);
routes.put("/livros", LivroController.listarLivros);
routes.delete("/livros", LivroController.listarLivros);
