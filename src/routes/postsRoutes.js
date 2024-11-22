import express from "express"
import listarPosts from "../controllers/postsController.js";


const postsRoutes = (app) => {
    app.use(express.json()); // Configura o servidor para devolver a resposta em JSON

    app.get("/posts", listarPosts);  // Aqui não se coloca parênteses porque queremos apenas indexar a função a ser executada 

    // Rota acessada por GET para uma variável 'id' específico
    app.get("/posts/:id", (req, res) => { 
        const idPost = Number(req.params.id)      // Acessa o parâmetro id que veio na rota da requisição
        const postDesejado = posts.find((post) => post.id === idPost)  // Usa arrow function para encontrar o post que tenha o id desejado, conevrtendo para valor numérico o id da URL
        
        res.status(200).json(postDesejado)
    });

    // Rota acessada por POST
    app.post("/posts", (req, res) => {
        res.status(200).json(posts)
    });
}

export default postsRoutes;  // Permite que a variável 'routes' possa ser usada em outros arquivos   

/*
Este arquivo irá isolar as rotas da aplicação

*/