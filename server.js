import express from "express"  // Lib usada para criar APIs

const app = express()       // Variavel que representara o servidor

// Define a porta que o servidor irá oferecer seu serviço
app.listen(3000, () => {
    console.log("Eu te escuto. :)")
})

// Rota acessada por GET
app.get("/api", (req, res) => {
    res.status(200).send("Boas vindas a imersão!")
})