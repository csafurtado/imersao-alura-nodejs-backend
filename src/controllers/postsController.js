import getTodosPosts from "../models/postsModel.js";


export default async function listarPosts (req, res) {
    const results_posts = await getTodosPosts();   // Espera a função terminar antes de poder executar, faz parte das funções assíncronas, aqui se espera a execução da função

    res.status(200).json(results_posts)
}

/*
Uma controller tem a responsabilidade de tratar das requisições e das respostas da rota

*/