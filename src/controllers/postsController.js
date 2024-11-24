import { getTodosPosts, criarPost, modificarPost } from "../models/postsModel.js";
import fs from "fs";        // Lib nativa do node para mexer com arquivos localmente
import gerarDescricaoComGemini from "../services/geminiService.js";


export async function listarPosts (req, res) {
    const results_posts = await getTodosPosts();   // Espera a função terminar antes de poder executar, faz parte das funções assíncronas, aqui se espera a execução da função

    res.status(200).json(results_posts)
}

export async function criarNovoPost(req, res) {
    const novoPost = req.body;

    try {
        const postCriado = await criarPost(novoPost);
        res.status(200).json(postCriado);

    } catch (erro) {
        console.error(erro.message);    // O objeto 'erro' já possui esse atributo
        res.status(500).json({"Erro":"Falha na requisição!"}) 
    }
}

// Função que fará o upload da imagem
export async function uploadImagem(req, res) {
    const imagemOrigem = {
        "descricao": "",
        "url_img": req.file.originalname,   // Pega o nome do arquivo que foi enviado na requisição
        "text_alt": "",
    };

    try {
        const resultadoUpload = await criarPost(imagemOrigem);
        const imagemAtualizada = `uploads/${resultadoUpload.insertedId}.png`;

        fs.renameSync(req.file.path, imagemAtualizada);     // Muda nome do arquivo localmente
        res.status(200).json(resultadoUpload);

    } catch (erro) {
        console.error(erro.message);    // O objeto 'erro' já possui esse atributo
        res.status(500).json({"Erro":"Falha na requisição!"}) 
    }
}

export async function atualizarPost(req, res) {
    const id = req.params.id;
    const urlImagem = `http://localhost:3000/${id}.png`;

    try {
        const imgBuffer = fs.readFileSync(`uploads/${id}.png`);
        const novaDescricao = await gerarDescricaoComGemini(imgBuffer);   // Gera uma descrição com base na imagem do post

        const postAtualizado = {
            'descricao': novaDescricao,
            'url_img': urlImagem,
            'text_alt':req.body.text_alt,
        }
        
        const postCriado = await modificarPost(id, postAtualizado);
        res.status(200).json(postCriado);

    } catch (erro) {
        console.error(erro.message);    // O objeto 'erro' já possui esse atributo
        res.status(500).json({"Erro":"Falha na requisição!"}) 
    }
}

/*
Uma controller tem a responsabilidade de tratar das requisições e das respostas da rota.

*/