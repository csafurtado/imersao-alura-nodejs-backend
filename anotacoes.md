<h1>Imersão Alura Node.js Backend</h1>

<h3>Passos realizados</h3>

* Comando `npm init es6 -y` iniciou um projeto que usará JS

* Comando `npm install express` para instalar o pacote do Express

* Comando `node server.js` para executar o arquivo server.js criado dentro do projeto, usando a flag `--watch` não é preciso ficar rodando esse comando toda hora

* Escrever no `package.json` em 'scripts' no campo 'dev', o comando `node --watch --env-file=.env server.js` na qual ao rodar no terminal o comando `node dev`, seja criado um servidor que se atualiza a cada mudança e que use as variáveis definidas no .env. Para usar isso no terminal, basta rodar o comando `npm run dev`.

* Comando `npm install multer` que é um pacote que traz uma interface para manipulação de arquivos

* Comando `npm i @google/generative-ai` para instalar o pacote que comunica com o Gemini

* Comando `npm i cors` para instalar o pacote que trará funcionalidades de segurança relativos ao CORS (comunicação de outros endereços)