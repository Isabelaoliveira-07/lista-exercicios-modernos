const notebook = {
  marca: "Dell",
  modelo: "Inspiron",
  preco: 3500,
  desconto: 500
};

const { marca, modelo, preco, desconto } = notebook;
const calcularPrecoFinal = (preco, desconto) => {
    return preco - desconto;
};
const precoFinal = calcularPrecoFinal(preco, desconto);
console.log(`Notebook ${marca} ${modelo}`);
console.log(`Preço Original: R$ ${preco}`);
console.log(`Desconto: ${desconto}`);
console.log(`Preço Final: ${precoFinal}`);