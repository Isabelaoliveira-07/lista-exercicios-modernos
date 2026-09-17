const pessoa = {
  nome: "Mariana",
  idade: 25,
  profissao: "Desenvolvedora"
};
const apresentarPessoa = ({ nome, idade, profissão }) => {
    return `${nome} tem ${idade} anos e trabalho como ${profissão}.`;
}
console.log(apresentarPessoa(pessoa));