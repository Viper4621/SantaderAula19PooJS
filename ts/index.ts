//aula 19 poo

// //Esta forma abaixo e para criar objeto unico
// const pessoa = {
//     nome:'Erick',
//     idade:27,
// }
// // então se criar uma nova pessoa precisamos criar varios objetos com a mesmo estrutura
// const pessoa2 = {
//     nome:'Pessoa2',
//     idade:34,
// }
//geralmente comocamos IAntes do nome para dizer que é interface
interface IPessoa {
    nome: string,
    idade: number,
    altura:number,
    peso: number,
}

//class = abstração  definindo abstração de uma pessoa a vantagem de criar uma class para reaproveitar sempre o codigo
//como definimos interface contrato de uma classe na class temos
class Pessoa implements IPessoa{
  //toda classe tem atributos e metodos
  //atributos: caracteristicas abaixo dentro de classe em atributos não faz sentido colcoar variavel
  nome: string;
  idade: number;
  altura: number;
  peso: number;

  //metodos: ação que a classe realiza toda ação vamos mapear dentro da classe como uma função metodos são funções
  //não precisa usar function nome do metodo e scope

  //metodo construtor
// quando criamos novos objetos a partir de uma classe ela ira herdar os atributos iniciais então usamos this.atributo = nome do atributo
//para inserir os dados novos de criação em uma nova pessoa
  constructor(nome: string, idade: number, altura:number, peso:number){
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    this.peso = peso;
  }

  dormir(){
    console.log('Dormindo...');
  }

}

//criando uma pessoa ou instanciando (individuo/objeto) a partir da definição da classe pessoa
//comando abaixo cria pessoa nova unica com todos os atributos e metodos que definimos na class
//então como definimos em nosso construtor os 3 atributos devemos passar no parametro de nossa new Pessoa os 3 definidos
const pessoa1 = new Pessoa('Jose', 14, 1.36,76);
const pesso2 = new Pessoa('Mamaco', 24, 1.52, 59);

pessoa1.dormir();