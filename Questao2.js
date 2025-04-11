let pares = 0;
let impares = 0;

for (let i = 0; i < 10; i++) {
  let num = parseInt(prompt("Digite o número " + (i + 1) + ":"));
  if (num % 2 === 0) {
    pares++;
  } else {
    impares++;
  }
}

console.log("Pares: " + pares);
console.log("Ímpares: " + impares);
