//Vetor de entradas. Passa o valor atual do salário e o valor do benefício.
const entradas = [2000, 250];
let i = 0;

//A função gets captura o valor da entrada, incrementa o valor do índice e retorna 
//o valor anteriormente capturado.
function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

//A função print exibe no terminal a mensagem recebida como parâmetro.
function print(texto) {
    console.log(texto);
}

//Esporta as funções gets e print para serem utilizadas por outros scripts.
module.exports = { gets, print }