//Mostra na tela do navegador o objeto pessoa

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

const pessoa1 = new Pessoa("João", 20);

document.write(pessoa1); // Saída: Pessoa { nome: 'João', idade: 20 }

const pessoa2 = new Pessoa("Maria", 25);

document.write(pessoa2); // Saída: Pessoa { nome: 'Maria', idade: 25 }

// ///////////////////////////////////////////////////////////////////////////