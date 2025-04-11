let salario = parseFloat(prompt("Digite o salário inicial:"));
let percentual = 0.015;

for (let ano = 1997; ano <= 2025; ano++) {
  percentual *= 2;
  salario += salario * percentual;
}

console.log("Salário atual em 2025: R$ " + salario.toFixed(2));
