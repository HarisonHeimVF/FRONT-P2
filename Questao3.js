let n = parseInt(prompt("Quantos números deseja digitar?"));
let menor = null;
let maior = null;
let soma = 0;

for (let i = 0; i < n; i++) {
  let num = parseFloat(prompt("Digite o número " + (i + 1) + ":"));
  if (i === 0 || num < menor) menor = num;
  if (i === 0 || num > maior) maior = num;
  soma += num;
}

console.log("Menor valor:", menor);
console.log("Maior valor:", maior);
console.log("Soma dos valores:", soma);
