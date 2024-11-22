import { MongoClient } from "mongodb";

export default async function conectarAoBanco(stringConexao) {
    /*
    export: Usar a função em outro arquivo
    default: Quando o arquivo possui uma única função a ser exportada 
    async: função que retorna uma Promise, sem interromper o fluxo do programa
    */

    let mongoClient;

    try {
        mongoClient = new MongoClient(stringConexao);   // Usa a string de conexão disponibilizada pelo próprio MongoDB

        console.log('Conectando ao Cluster de banco de dados do MongoDB...');
        await mongoClient.connect();

        console.log('Conectado com sucesso!');

        return mongoClient;

    } catch (erro) {
        console.log('Não foi possível conectar ao banco de dados do MongoDB!')
        console.log(erro)
        process.exit();     // Encerra a aplicação
    }
}