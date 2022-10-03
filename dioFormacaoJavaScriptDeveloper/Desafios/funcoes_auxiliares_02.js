//O primeiro numero do vetor de entradas representa a quantidade de valores que 
//serão testados.
const entradas = [7, 5, 1, 8, 11, 3, 88, 25];
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