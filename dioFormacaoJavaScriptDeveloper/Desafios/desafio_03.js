/*  3) Faça um programa que calcule e imprima o salário salário a ser transferido para um funcionário.
    Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios.
    O salário a ser transferido é calculado da seguinte maneira: 
   
    valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos benefícios

    Para calcular o percentual de imposto segue as aliquotas:

        De R$ 0.00 a R$ 1100.00 = 5.00%
        De R$ 1100.01 a	R$ 2500.00 = 10.00%
        Maior que 2500.00 = 15.00%

        Exemplo:
            Entrada:
                2000
                250

            Saída:
                2050.00 */

//Importação do script com as entradas de valores.
const { gets, print } = require('./funcoes_auxiliares_03');

//Captura o valor do salário atual.
/*const salario_atual = gets();
//Captura o valor dos benefícios.
const beneficios = gets();

let salario_reajustado = 0;

//Estrutura de decisão para verificar o valor do salário a ser repassado para o funcionário.
if ((salario_atual > 0) && (salario_atual <= 1100))
    salario_reajustado = (salario_atual - (salario_atual * 5 / 100)) + beneficios;
else if ((salario_atual > 1100) && (salario_atual <= 2500))
    salario_reajustado = (salario_atual - (salario_atual * 10 / 100)) + beneficios;
else
    salario_reajustado = (salario_atual - (salario_atual * 15 / 100)) + beneficios;

//Exibe na console o valor so salário reajustado.
print(`${salario_reajustado}`)*/

const valorSalario = parseFloat(gets());
const valorBeneficios = parseFloat(gets());

let valorTotalSalario = valorSalario - calcularPorcentagem(valorSalario, pegarAliquota(valorSalario)) + valorBeneficios;
print(valorTotalSalario.toFixed(2));

function calcularPorcentagem(valor, percentual) {
    return valor * (percentual / 100);
}

function pegarAliquota(salario) {
    if (salario >= 0 && salario <= 1100) {
        return 5;
    } else if (salario >= 1100.01 && salario <= 2500.00) {
        return 10;
    } else {
        return 15;
    }
}