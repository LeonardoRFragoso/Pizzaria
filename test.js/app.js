const express = require('express');

const servidor = express();

servidor.get('/usuarios', () => {console.log("Chegou um requisição")});

servidor.listen(3000);

