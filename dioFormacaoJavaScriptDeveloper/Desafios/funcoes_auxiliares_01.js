//Vetor com o valor das médias a serem analisadas
const entradas = [7];
//Variável a ser utilizada como índice do vetor de notas.
let i = 0;

//A função gets captura o valor da entrada, incrementa o valor do índice e retorna 
//o valor anteriormente capturado.
function gets() {
    const nota = entradas[i];
    i++;
    return nota;
}

//A função print exibe no terminal a mensagem recebida como parâmetro.
function print(texto) {
    console.log(texto);
}

//Esporta as funções gets e print para serem utilizadas por outros scripts.
module.exports = { gets, print }