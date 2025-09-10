/*
    Exemplo:
    {
        primeiraPropriedade: 'Valor',
        segundapropriedade: 'Valor'
    }

*/
const usuarios = [
    {   
        nome: 'Gustavo', 
        email: 'gustavo@email.com',
        idade: 20
    },
    {   
        nome: 'Marcos', 
        email: 'marcos@email.com',
        idade: 25
    },
    {   
        nome: 'Lucas', 
        email: 'lucas@email.com',
        idade: 30
    },
    {   
        nome: 'Pamela', 
        email: 'pamela@email.com',
        idade: 45
    }
];

function retornarUsuarios() {
    return usuarios;
}

function adicionarNovoUsuario(usuario) {
    usuarios.push(usuario);
}

module.exports = {
    retornarUsuarios,
    adicionarNovoUsuario
}