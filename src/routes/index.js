import express from "express";

import livros from "./livrosRoutes.js";

// observação
// o express.json() é middleware que serve para ler as rotas. No caso abaixo, ele identifica as rotas de livros etc. 

const routes = (app)=>{

    app.route("/").get((req, res)=> res.status(200).send("Curso de Node.js"));

    app.use(express.json(), livros);

};


export default routes;