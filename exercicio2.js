function gerarCampos() {
    const inputsDiv = document.getElementById('inputs');
    for (let i = 1; i <= 15; i++) {
        const div = document.createElement('div');
        div.innerHTML = `
            <label for="altura${i}">Altura ${i}: </label>
            <input type="number" id="altura${i}" step="0.01" required> metros
            <label for="genero${i}"> Gênero: </label>
            <select id="genero${i}" required>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
            </select>
            <br>
        `;
        inputsDiv.appendChild(div);
    }
}

function calcularAlturas(pessoas) {
    let maiorAltura = pessoas[0].altura;
    let menorAltura = pessoas[0].altura;

    pessoas.forEach(pessoa => {
        if (pessoa.altura > maiorAltura) {
            maiorAltura = pessoa.altura;
        }
        if (pessoa.altura < menorAltura) {
            menorAltura = pessoa.altura;
        }
    });

    return { maiorAltura, menorAltura };
}

function mediaAlturaMasculino(pessoas) {
    let somaAlturaMasculino = 0;
    let quantidadeMasculino = 0;

    pessoas.forEach(pessoa => {
        if (pessoa.genero === 'Masculino') {
            somaAlturaMasculino += pessoa.altura;
            quantidadeMasculino++;
        }
    });

    return quantidadeMasculino ? (somaAlturaMasculino / quantidadeMasculino).toFixed(2) : 0;
}

function contarFeminino(pessoas) {
    let quantidadeFeminino = 0;

    pessoas.forEach(pessoa => {
        if (pessoa.genero === 'Feminino') {
            quantidadeFeminino++;
        }
    });

    return quantidadeFeminino;
}

function calcularResultados() {
    const pessoas = [];

    for (let i = 1; i <= 15; i++) {
        const altura = parseFloat(document.getElementById(`altura${i}`).value);
        const genero = document.getElementById(`genero${i}`).value;
        
        if (!isNaN(altura) && (genero === 'Masculino' || genero === 'Feminino')) {
            pessoas.push({ altura, genero });
        }
    }

    if (pessoas.length === 15) {
        const alturas = calcularAlturas(pessoas);
        const mediaMasculino = mediaAlturaMasculino(pessoas);
        const totalFeminino = contarFeminino(pessoas);

        const resultado = `
            A maior altura do grupo é: ${alturas.maiorAltura}m<br>
            A menor altura do grupo é: ${alturas.menorAltura}m<br>
            A média de altura das pessoas do gênero Masculino é: ${mediaMasculino}m<br>
            O número de pessoas do gênero Feminino é: ${totalFeminino}
        `;

        document.getElementById('result').innerHTML = resultado;
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
}

window.addEventListener('DOMContentLoaded', gerarCampos);