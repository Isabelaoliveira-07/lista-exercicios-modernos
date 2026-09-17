const produto = {
  nome: "Headset",
  preco: 200,
  desconto: 20
};
const { nome, preco ,desconto } = produto;
const novoPreco = preco - desconto;
console.log (` ${nome} custava R$ ${preco} e agora custa R${novoPreco}.`);