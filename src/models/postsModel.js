import 'dotenv/config';
import { ObjectId } from "mongodb"
import conectarAoBanco from "../config/dbConfig.js"     // Importa a função para conectar ao DB (sempre colocar a extensão '.js' caso seja em projetos Node.js)


const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)  // Coleta o valor da variável definida no .env do projeto e a usa para conetar ao DB MONGODB

// Função assímcrona que busca os dados dentro do DB após a conexão bem-sucedida
export async function getTodosPosts() {
    const db = conexao.db("imersao-alura-instabytes")
    const colecao_posts = db.collection("posts")
    
    return colecao_posts.find().toArray()  // Coleta todos os itens dentro da coleção (tabela) de posts  
}

// Função assíncrona que irá criar um post dentro do DB após a conexão bem-sucedida
export async function criarPost(conteudoPost) {
    const db = conexao.db("imersao-alura-instabytes");
    const colecao_posts = db.collection("posts");
    
    return colecao_posts.insertOne(conteudoPost);  // Coleta todos os itens dentro da coleção (tabela) de posts  
}

// Função assíncrona que irá atualizar no BD as informações de um item
export async function modificarPost(id, post) {
    const db = conexao.db("imersao-alura-instabytes");
    const colecao_posts = db.collection("posts");
    const objID = ObjectId.createFromHexString(id)  // Necessário para o MomgoDB saber qual item atualizar (o campo ID das tabelas lá é um ObjectId)

    return colecao_posts.updateOne({_id: new ObjectId(objID)}, {$set:post});  // Atualiza o item desejado com base no objeto ID dado e passa o 'set' de dados para atualizar
}

/* 
Esse arquivo representará o banco de dados dos posts 

*/