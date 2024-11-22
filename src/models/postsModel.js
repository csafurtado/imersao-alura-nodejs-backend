import conectarAoBanco from "../config/dbConfig.js"     // Importa a função para conectar ao DB (sempre colocar a extensão '.js' caso seja em projetos Node.js)


const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)  // Coleta o valor da variável definida no .env do projeto e a usa para conetar ao DB MONGODB

export default function getTodosPosts() {
    const db = conexao.db("imersao-alura-instabytes")
    const colecao_posts = db.collection("posts")
    
    return colecao_posts.find().toArray()  // Coleta todos os itens dentro da coleção (tabela) de posts  
}

/* 
Esse arquivo representará o banco de dados dos posts

*/