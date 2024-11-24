import express from "express"  // Lib usada para criar APIs
import postsRoutes from "./src/routes/postsRoutes.js"


const app = express()                   // Variavel que representara o servidor
app.use(express.static("uploads"));     // O express irá utilizar a pasta 'uploads' para servir arquivos estáticos
postsRoutes(app)                        // Chama o app para dentro da função, permitindo-o usar as rotas definidas no arquivo

// Define a porta que o servidor irá oferecer seu serviço
app.listen(3000, () => {
    console.log("Eu te escuto. :)")
})


/*
await e async: 'async' diz que a função retornará uma Promise, não interrompendo o fluxo do programa
caso haja outras instruções. 'await' faz com que o programa (dentro de uma função async) espere o retorno de uma Promise antes de
continuar com a execução do código.



*/