import livro from "../models/Livro.js";



class LivroController {

    static async listarLivros(req, res) {
        const listaLivros = await livro.find({});
        res.status(200).json(listaLivros);
    }
    static async cadastraLivro(req, res) {
        try {

            const novoLivro = await livro.create(req.body);
            res.status(201).json({ message: "criado com sucesso!", livro: novoLivro });

        } catch (erro) {

            res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro` });
            
        }
    }
    static async buscaLivro(req, res) {
        const listaLivros = await livro.find({});
        res.status(200).json(listaLivros);
    }
    // static async listarLivros(req, res){
    //     const listaLivros = await livro.find({});
    //     res.status(200).json(listaLivros);
    // }
    // static async listarLivros(req, res){
    //     const listaLivros = await livro.find({});
    //     res.status(200).json(listaLivros);
    // }
    // static async listarLivros(req, res){
    //     const listaLivros = await livro.find({});
    //     res.status(200).json(listaLivros);
    // }



    // app.get("/livros/:id", (req, res) => {

    //     const index = buscaLivro(req.params.id);


    //     res.status(200).json(livros[index]);
    // });
    // app.put("/livros/:id", (req, res) => {

    //     const index = buscaLivro(req.params.id);

    //     livros[index].titulo = req.body.titulo;

    //     res.status(200).json(livros);
    // });
    // app.delete("/livros/:id", (req, res) => {

    //     const index = buscaLivro(req.params.id);

    //     livros.splice(index, 1);

    //     res.status(200).send("Deletado com sucesso");
    // });

    // app.post("/livros", (req, res) => {

    //     livros.push(req.body);

    //     res.status(201).send("Livro cadastrado com sucesso");
    // });




};


export default LivroController
