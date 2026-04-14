class Parquimetro {
    constructor(valor) {
        this.valor = valor;
    }

    calcularTempo() {
        if (this.valor < 1.00) {
            return {
                mensagem: "Valor insuficiente",
                tempo: 0,
                troco: this.valor
            };
        }

        let tempo = 0;
        let troco = 0;

        if (this.valor >= 3.00) {
            tempo = 120;
            troco = this.valor - 3.00;
        } else if (this.valor >= 1.75) {
            tempo = 60;
            troco = this.valor - 1.75;
        } else if (this.valor >= 1.00) {
            tempo = 30;
            troco = this.valor - 1.00;
        }

        return {
            mensagem: "Tempo calculado com sucesso",
            tempo: tempo,
            troco: troco
        };
    }
}

// Função chamada pelo botão
function calcular() {
    const valorInput = document.getElementById("valor").value;
    const valor = parseFloat(valorInput);

    const resultadoDiv = document.getElementById("resultado");

    if (isNaN(valor)) {
        resultadoDiv.innerHTML = "Digite um valor válido.";
        return;
    }

    const parquimetro = new Parquimetro(valor);
    const resultado = parquimetro.calcularTempo();

    if (resultado.tempo === 0) {
        resultadoDiv.innerHTML = resultado.mensagem;
    } else {
        resultadoDiv.innerHTML = `
            Tempo: ${resultado.tempo} minutos <br>
            Troco: R$ ${resultado.troco.toFixed(2)}
        `;
    }
}
