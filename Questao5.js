function calcularCirculo() {
    let raio = parseFloat(prompt("Informe o raio do círculo:"));
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;
  
    console.log("Área: " + area.toFixed(2));
    console.log("Perímetro: " + perimetro.toFixed(2));
  }
  
  calcularCirculo();
  