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

/* 
Esse arquivo representará o banco de dados dos posts 

*/