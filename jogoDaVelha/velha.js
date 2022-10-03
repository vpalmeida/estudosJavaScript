var jogador = null;
var jogadorSelecionado = document.getElementById("jogador-selecionado");
var jogadorVencedor = document.getElementById("vencedor-selecionado");
var partidaEncerrada = false;
var qtdJogadorX = 0;
var qtdJogadorO = 0;
var placarJogadorX = document.getElementById("placarJogadorX");
var placarJogadorO = document.getElementById("placarJogadorO");

var quadrado1 = document.getElementById("1");
var quadrado2 = document.getElementById("2");
var quadrado3 = document.getElementById("3");
var quadrado4 = document.getElementById("4");
var quadrado5 = document.getElementById("5");
var quadrado6 = document.getElementById("6");
var quadrado7 = document.getElementById("7");
var quadrado8 = document.getElementById("8");
var quadrado9 = document.getElementById("9");

mudaJogador("X");

function escolheQuadrado(id) {
    if (!partidaEncerrada) {
        var quadrado = document.getElementById(id);

        if (quadrado.innerHTML != "-")
            return;

        quadrado.innerHTML = jogador;
        quadrado.style.color = "#000";

        if (verificaVitoria(id)) {
            defineVencedor(jogador);
            if (jogador === "X") {
                qtdJogadorX = qtdJogadorX + 1;
                placarJogadorX.innerHTML = "X: " + qtdJogadorX;
            } else {
                qtdJogadorO = qtdJogadorO + 1;
                placarJogadorO.innerHTML = "O: " + qtdJogadorO;
            }

            return;
        }

        if (jogador === "X")
            jogador = "O";
        else
            jogador = "X";

        mudaJogador(jogador);
    }

}

function mudaJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function verificaVitoria(idMarcado) {
    switch (idMarcado) {
        case '1':
            if (checaSequencia(quadrado1, quadrado2, quadrado3) ||
                checaSequencia(quadrado1, quadrado4, quadrado7) ||
                checaSequencia(quadrado1, quadrado5, quadrado9))
                return true;
            break;
        case '2':
            if (checaSequencia(quadrado2, quadrado1, quadrado3) ||
                checaSequencia(quadrado2, quadrado5, quadrado8))
                return true;
            break;
        case '3':
            if (checaSequencia(quadrado3, quadrado1, quadrado2) ||
                checaSequencia(quadrado3, quadrado6, quadrado9) ||
                checaSequencia(quadrado3, quadrado5, quadrado7))
                return true;
            break;
        case '4':
            if (checaSequencia(quadrado4, quadrado1, quadrado7) ||
                checaSequencia(quadrado4, quadrado5, quadrado6))
                return true;
            break;
        case '5':
            if (checaSequencia(quadrado5, quadrado2, quadrado8) ||
                checaSequencia(quadrado5, quadrado4, quadrado6) ||
                checaSequencia(quadrado5, quadrado1, quadrado9) ||
                checaSequencia(quadrado5, quadrado3, quadrado7))
                return true;
            break;
        case '6':
            if (checaSequencia(quadrado6, quadrado3, quadrado9) ||
                checaSequencia(quadrado6, quadrado4, quadrado5))
                return true;
            break;
        case '7':
            if (checaSequencia(quadrado7, quadrado1, quadrado4) ||
                checaSequencia(quadrado7, quadrado8, quadrado9) ||
                checaSequencia(quadrado7, quadrado3, quadrado5))
                return true;
            break;
        case '8':
            if (checaSequencia(quadrado8, quadrado2, quadrado5) ||
                checaSequencia(quadrado8, quadrado7, quadrado9))
                return true;
            break;
        case '9':
            if (checaSequencia(quadrado9, quadrado1, quadrado5) ||
                checaSequencia(quadrado9, quadrado3, quadrado6) ||
                checaSequencia(quadrado9, quadrado7, quadrado8))
                return true;
            break;
    }

    return false;
}

function checaSequencia(quad1, quad2, quad3) {
    if ((quad1.innerHTML === quad2.innerHTML) && (quad1.innerHTML === quad3.innerHTML)) {
        mudaCorQuadrado(quad1, quad2, quad3);
        partidaEncerrada = true;
        return true;
    } else
        return false;
}

function mudaCorQuadrado(quad1, quad2, quad3) {
    quad1.style.background = "#3CB371";
    quad2.style.background = "#3CB371";
    quad3.style.background = "#3CB371";
}

function defineVencedor(jogador) {
    jogadorVencedor.innerHTML = jogador;
}

function reiniciar() {
    jogador = null;
    jogadorSelecionado.innerHTML = "";
    jogadorVencedor.innerHTML = ""
    partidaEncerrada = false;

    var quadrados = document.getElementsByClassName("quadrado");

    for (let i = 0; i < 9; i++) {
        quadrados[i].innerHTML = "-";
        quadrados[i].style.color = "#A0522D";
        quadrados[i].style.background = "#A0522D";
    }

    mudaJogador("X");
}

function zerarPlacar() {
    qtdJogadorX = 0;
    placarJogadorX.innerHTML = "X: " + qtdJogadorX;
    qtdJogadorO = 0;
    placarJogadorO.innerHTML = "O: " + qtdJogadorO;
}