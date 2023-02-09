let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1
console.log(!!isAtivo);

console.log("Os verdadeiros...");
console.log(!!3);
console.log(!!-1);
console.log(" ");
console.log(!!"texto");
console.log(!! {});
console.log(!! []);
console.log(!!Infinity);
console.log(!!(isAtivo=true));

console.log("Os falsos...");
console.log(!!0);
console.log(!!'');
console.log(!!null);//nulo
console.log(!!NaN);//nao é numero
console.log(!!undefined);
console.log(!!(isAtivo=false));

console.log("Para finalizar");
console.log(!!('' || null || 0 || " ")); // '||' essa barra significa ou
//sempre sera verdadeira 
let nome = "Eduardo"
//sempre sera indetificado o primeira açao verdadeira
console.log(nome || "dudu");

