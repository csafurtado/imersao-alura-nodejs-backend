import express from "express"
import multer from "multer";    // Imports de bibliotecas vem antes dos imports de funções 'nossas'
import { listarPosts, criarNovoPost, uploadImagem, atualizarPost } from "../controllers/postsController.js";
import cors from "cors";

/*
// Configura a localização dos arquivos para upload para funcionar no Windows
const storage = multer.diskStorage({
    destination: function (_req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({"dest":"./uploads", "storage": storage})     
*/

// Configura o CORS da aplicação do backend
const configCors = {
    origin: "http://localhost:8000",        // Aceitar requisições do localhost:8000
    optionSuccessStatus: 200,
}

// Configura a localização de arquivos que o Multer irá gerenciar (Linux/Mac)
const upload = multer({"dest":"./uploads"})

const postsRoutes = (app) => {
    // Configura o servidor
    app.use(express.json());    // Devolver a resposta em JSON
    app.use(cors(configCors));   // Configurar o CORS

    // Rota para ver todos os 'posts'
    app.get("/posts", listarPosts);  // Aqui não se coloca parênteses porque queremos apenas indexar a função a ser executada 

    // Rota para criar um novo 'post'
    app.post("/posts", criarNovoPost);

    // Rota para upload de imagens
    app.post("/upload", upload.single("imagem"), uploadImagem);  // O Upload aqui será de uma imagem, onde estará no campo 'imagem' do form de envio e usará a função uploadImagem()

    // Rota para atualizar informações
    app.put("/upload/:id", atualizarPost);
}

export default postsRoutes;  // Permite que a variável 'routes' possa ser usada em outros arquivos   

/*
Este arquivo irá isolar as rotas da aplicação

*/