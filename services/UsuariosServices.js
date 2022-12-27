const usuarios = require('../database/usuarios.json');

function listar(){
    
    const formatUsurario = usuarios => {
        return {
                id: usuario.id,
                nome: usuario.nome,
                email: usuario.email,
            }
    }

    let usuariosFormatados = usuarios.map(formatUsuario);

    console.table (usuariosFormatados)

}


function listarNomes(){
    const retornaNome = usuario => {
        return usuario.nome

    }
    
    let nomeDosUsuarios = usuarios.map(retornaNome);

    console.table (nomeDosUsuarios)

}

function salvar(arrayDeUsuarios){
    const fs = require('fs');
    fs.writeFileSync('./databases/usuarios.json', JSON.stringify(arrayDeUsuarios, null, 4))
}

function cadastrar(objeto){
// Seu código aqui
}

function detalhar(idUsuario){
// Seu código aqui
}

function remover(idDoUsuarioParaRemover){
    // Seu código aqui
}

function alterar(novosDados, idUsuario){
    // Seu código aqui
}

function addEndereco(novoEndereco, idUsuario){
    // Seu código aqui
}

function removerEndereco(posicaoDoEndereco, idUsuario){
// Seu código aqui
}

function alterarEndereco(posicaoDoEndereco, novoEndereco, idUsuario){
// Seu código aqui        
}

function addFormaDePagamento(novaFormaDePagamento, idUsuario){
    // Seu código aqui
}

function removerFormaDePagamento(posicaoDaFormaDePagamento, idUsuario){
    // Seu código aqui
}

function alterarFormaDePagamento(novaFormaDePagamento, posicaoDaFormaDePagamento, idUsuario){
    // Seu código aqui
}

const UsuariosServices = {
    cadastrar,
    listar,
    salvar, 
    detalhar,
    remover,
    alterar,
    addEndereco,
    removerEndereco,
    alteraEndereco: alterarEndereco,
    addFormaDePagamento,
    removerFormaDePagamento,
    alterarFormaDePagamento
}

module.exports = UsuariosServices;