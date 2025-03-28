let nomes = ["Harison", "Renata", "Lis", "Gustavo", "Benicio"]
console.log("Terceiro Nome:", nomes[2]);

nomes.push("Ótavia");
nomes.unshift("Edson")
console.log("Lista após adições: ", nomes);

nomes.pop();
console.log("Lista após remoção do Último nome", nomes);

let numeros = [2, 4, 6, 8];
let numerosDobrados = numeros.map(num => num * 2);
console.log("Lista om valores dobrados:", numerosDobrados);

let numerosOriginais = [1, 3, 5, 7, 9];
let numerosFiltrados = numerosOriginais.filter(num => num > 5);
console.log("Números maiores que 5:", numerosFiltrados);
