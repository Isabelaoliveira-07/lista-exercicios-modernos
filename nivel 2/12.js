const produto = {
  nome: "Mouse",
  preco: 80
};

const mostrarProduto = (produto) => {
    return `Produto: ${produto.nome} - Preço: R$ ${produto.preco}.`;
};
console.log(mostrarProduto(produto));