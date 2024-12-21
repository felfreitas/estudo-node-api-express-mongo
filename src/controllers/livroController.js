import livro from "../models/Livro.js";



class LivroController {

    
    static async listarLivros(req, res) {
        try {

            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);

        } catch (erro) {

            res.status(500).json({ message: `${erro.message} - falha na requisição ` });
        }
    }

    static async listarLivroPorId(req, res) {
        try {

            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);

            res.status(200).json(livroEncontrado);

        } catch (erro) {

            res.status(500).json({ message: `${erro.message} - falha na requisição do livro` });
        }
    }

    static async cadastraLivro(req, res) {
        try {

            const novoLivro = await livro.create(req.body);
            res.status(201).json({ message: "criado com sucesso!", livro: novoLivro });

        } catch (erro) {

            res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro` });

        }
    }

    static async atualizarLivro(req, res) {
        try {

            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);

            res.status(200).json({message:"livro atualizado"});

        } catch (erro) {

            res.status(500).json({ message: `${erro.message} - falha na atualização do livro` });
        }
    }
    static async excluirLivro(req, res) {
        try {

            const id = req.params.id;
            await livro.findByIdAndDelete(id);

            res.status(200).json({message:"livro excluído com sucesso"});

        } catch (erro) {

            res.status(500).json({ message: `${erro.message} - falha na exclusão do livro` });
        }
    }

  


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
