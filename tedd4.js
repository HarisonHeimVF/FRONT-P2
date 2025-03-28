
function calcularTotal(precoUnitario, quantidade) {
    return precoUnitario * quantidade;
}


function aplicarDesconto(valorTotal) {
    if (valorTotal > 100) {
        return valorTotal * 0.9;  
    }
    return valorTotal; 
}

function exibirResumo() {
    const precoUnitario = parseFloat(prompt("Digite o preço unitário do produto:"));
    const quantidade = parseInt(prompt("Digite a quantidade comprada:"));
    
    if (isNaN(precoUnitario) || isNaN(quantidade)) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    const valorTotal = calcularTotal(precoUnitario, quantidade);
    const valorComDesconto = aplicarDesconto(valorTotal);

    
    alert(`Resumo da Compra:\nValor total antes do desconto: R$ ${valorTotal.toFixed(2)}\nValor final com o desconto aplicado: R$ ${valorComDesconto.toFixed(2)}`);
}
