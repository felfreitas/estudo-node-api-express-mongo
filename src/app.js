import express from "express";

import conectaNaDataBase from "./config/dbConnect.js";

import routes from "./routes/index.js";


const conexao = await conectaNaDataBase();

conexao.on("error", (erro)=>{
    console.error("error de conexao", erro);
});

conexao.once("open", ()=>{
    console.log("conexão feita com sucesso!");
});

const app = express();

routes(app);


export default app;