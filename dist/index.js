"use strict";
//aula 19 poo
//class = abstração  definindo abstração de uma pessoa a vantagem de criar uma class para reaproveitar sempre o codigo
//como definimos interface contrato de uma classe na class temos
class Pessoa {
    //   readonly cpf: string; === deixa a leitura
    //metodos: ação que a classe realiza toda ação vamos mapear dentro da classe como uma função metodos são funções
    //não precisa usar function nome do metodo e scope
    //metodo construtor
    // quando criamos novos objetos a partir de uma classe ela ira herdar os atributos iniciais então usamos this.atributo = nome do atributo
    //para inserir os dados novos de criação em uma nova pessoa
    constructor(nome, idade, altura, cpf) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this._cpf = cpf;
    }
    dormir() {
        console.log('Dormindo...');
    }
    //metodo especial acessor: getter é para obter algum valor privado
    //dentro da classe e constructor e methodos podemos colocar o acessor
    get cpf() {
        return this._cpf;
    }
    //acessor setter = com isso podemos redefinir atributos privados
    set cpf(newCpf) {
        if (newCpf.length !== 14) {
            //forma de lançar erros no js no caso pelo tamanho incorreto de cpf podemos criar em caso de estrutura para não deixar erros
            //essa é a vantagem de criar os seters ai usamos o set para alterar com if de condição que não desejamos e o erro
            throw new Error("CPF length is incorrect");
        }
        this._cpf = newCpf;
    }
}
//fazendo herança de objetos extendemos nossa classe pessoa e podemos colocar os implements tbm
class Professor extends Pessoa {
    constructor(nome, idade, altura, cpf, codigo) {
        //toda vez que usamos construtor de uma herança temos que chamar o construtor da classe que vai ser herdada usando super
        super(nome, idade, altura, cpf);
        this.codigo = codigo;
    }
    //vamos criar um methodo do professor ele herda todos metodos de herança tambem
    ensinar() {
        console.log('Ensinando...');
    }
}
//criando uma pessoa ou instanciando (individuo/objeto) a partir da definição da classe pessoa
//comando abaixo cria pessoa nova unica com todos os atributos e metodos que definimos na class
//então como definimos em nosso construtor os 3 atributos devemos passar no parametro de nossa new Pessoa os 3 definidos
const pessoa1 = new Pessoa('Jose', 14, 1.36, '123.524.745-72');
const pesso2 = new Pessoa('Mamaco', 24, 1.52, '231.213.112-52');
console.log(pessoa1, pesso2);
//quando usamos private em um atributo não conseguimos acessar ele pelo console.log
console.log(pessoa1.cpf);
//encapsulamento: cada classe tem que ter todas as informações necessarias para seu funcionamento bem como todos metodos necessarios
// para alterar essas informações e idealmente apenas objetos da propria classe podem alterar seus atributos e objetos de outras classes
// e os objetos de outras classes apenas vão interagir com a classe atraves de metodos
//aaaa
// pessoa1.cpf = "67"
console.log(pessoa1.cpf);
//agora atribuimos novo cpf não é muito correto usar acessor set pois podemos alterar informações importantes
//herança
//objeto da classe professor
const professor = new Professor('professor', 36, 1.75, '456.123.789-45', "0001");
console.log(professor);
console.log(professor.dormir);
console.log(professor.ensinar);
//polimorfismo Objetos de diferentes classes herdeiras de uma mesma classe mãe podem ser tratadas genericamentes como objetos  da classe mae
// exemplo classe Pessoa depois criamos Professor que herdou da classe mae e ele tambem é uma pessoa
//todo objeto filho tambem pode ser considerado como mae exemplo abaixo instanceof
console.log(pessoa1 instanceof Pessoa);
//resposta true
console.log(professor instanceof Pessoa); // sim pois quando criamos ele usamos extends da classe Pessoa então herdou e virou instancia
//resposta true
