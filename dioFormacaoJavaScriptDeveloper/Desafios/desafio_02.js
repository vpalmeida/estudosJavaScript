/*  2)  Faça um programa que receba N quantidade de números e seus respectivos valores.
    Imprima o maior número par e o menor número impar.

        Exemplo:
            Entrada:
                5
                3
                4
                1
                10
                8

            Saída:
                Maior número par: 10
                Menor número impar: 1*/

//Importação do script com as entradas de valores.
const { gets, print } = require('./funcoes_auxiliares_02');

//Pega o primeiro valor que representa a quantidade de numeros a serem testados.
const total_valores = gets();
maior_par = 0;
menor_impar = 0;

//Verifica valor a valor procurando o menor número impar e o maior número par.
for (let i = 0; i < total_valores; i++) {
    valor = gets();
    if (valor % 2 === 0) {
        if ((valor > maior_par) || (maior_par === 0))
            maior_par = valor;
    } else {
        if ((valor < menor_impar) || (menor_impar === 0))
            menor_impar = valor;
    }
}

//Exibe na console a saída com os valores encontrados.
print(`Maior número par: ${maior_par}`);
print(`Menor número impar: ${menor_impar}`);