const express = require('espress');

const servidor = express ();

servidor.get('/usuarios', () => {console.log("chegou uma requisição")});

servidor.listen(3000);

