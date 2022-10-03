/*  1) Faça um programa que receba a média de um aluno.
    Caso a média seja < 5 imprima "Reprovado"
    Caso a média seja >= 5 e < 7 imprima "Recuperação"
    Caso a média seja >= 7 imprima "Aprovado"

        Exemplo:
            Entrada:
                5.5
            Saída:
                Recuperação*/

//Importação do script com as entradas de notas
const { gets, print } = require('./funcoes_auxiliares_01');

//Variável que irá receber a média do aluno
const media = gets();

//Estrutura condicional para tomada de decisão
if (media < 5)
    print('Reprovado');
else if (media >= 5 && media < 7)
    print('Recuperação')
else
    print('Aprovado')