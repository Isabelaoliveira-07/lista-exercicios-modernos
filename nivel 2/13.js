const produto = {
  nome: "Mouse",
  preco: 80
};

const { nome, preco } = produto;

const mostrarProduto = (nome, preco) => {
    return `Produto: ${nome} - Preço: R$ ${preco}.`
};

console.log(mostrarProduto(nome, preco));