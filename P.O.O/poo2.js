const pessoa = {
    primeiroNome: 'Sarah',
    sobrenome: 'Ribeiro',
    idade: 16,
    corOlho: 'Verde',
    altura: 164,
    dataNascimento: '05/01/2008',
    usaOculos: false,
    corPele: 'branco',
    corFavorita: 'rosa',
    sexo: 'Feminino'
}

console.log('A ' + pessoa.primeiroNome + " " + pessoa.sobrenome + ' tem ' + pessoa.idade + ' anos!');

// Alterar um objeto
pessoa.sobrenome = 'Barros';

// Segunda frase
console.log('2 - A ' + pessoa.primeiroNome + ' ' + pessoa);