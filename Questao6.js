function calcularInvestimento() {
    let C = parseFloat(prompt("Capital inicial investido:"));
    let i = parseFloat(prompt("Taxa de juros mensal (em %):")) / 100;
    let t = parseInt(prompt("Tempo do investimento (em meses):"));
  
    let M = C * Math.pow(1 + i, t);
    console.log("Montante final: R$ " + M.toFixed(2));
  }
  
  calcularInvestimento();
  