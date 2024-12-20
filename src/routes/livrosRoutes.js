import express from "express";
import LivroController from "../controllers/livroController.js";


const routes = express.Router();

// Como estamos usando o express: as rotas tem que ficar da maior complexidade para menor: 
routes.get("/livros", LivroController.listarLivros);
routes.get("/livros/busca", LivroController.listarLivrosPorEditora);

routes.get("/livros/:id", LivroController.listarLivroPorId);
routes.post("/livros", LivroController.cadastraLivro);
routes.put("/livros/:id", LivroController.atualizarLivro);
routes.delete("/livros/:id", LivroController.excluirLivro);



export default routes;