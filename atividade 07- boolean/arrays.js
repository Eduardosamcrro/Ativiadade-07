const valores = [7.7, 6.2, 6.3, 9.4];
console.log(valores[1], valores[3]);
//length informa quantos erlementos tem no array.
//push é utilizado para add novos componentes. ele é heterojenico
valores[4] = 10
console.log(valores.length);
valores.push({id: 6}, false, null,"teste")
console.log(valores)
//pop retira o ultimo valor do array
//delete retira o elemento selecionado
console.log(valores.pop());
delete valores[2];
console.log(valores)

//typeof indica o tipo, se é um objeto, numero...
console.log(typeof valores);
