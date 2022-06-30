function calculadora() {
    const operacao = Number(prompt('Escolha uma operação:\n 1 - soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)'));
    
    let n1 = Number(prompt('Insira o primeiro valor:'));
    let n2 = Number(prompt('Insira o segundo valor:'));
    let resultado;

    function soma() {
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`)
    }

    function subtracao() {
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`)
    }

    function multiplicacao() {
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`)
    }

    function divisaoReal() {
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`)
    }

    function divisaoInteira() {
        resultado = n1 % n2;
        alert(`O resto entre a divisão de ${n1} e ${n2} é igual a ${resultado}`)
    }

    function potenciacao() {
        resultado = n1 ** n2;
        alert(`O número ${n1} elevado ao número ${n2} é igual a ${resultado}`)
    }

function novaOperação() {
    let opcao = prompt('Deseja realizar outra operação?\n 1 - Sim\n 2 - Não');
     
    if (opcao == 1) {
        calculadora();
     } else if (opcao == 2) {
        alert('Obrigada e até a próxima!')
     } else {
        alert('ERRO!!!\n Digite uma opção válida!')
        
     }
     novaOperação();
}

if (operacao == 1) {
    soma(); 
} else if (operacao == 2) {
    subtracao();
} else if (operacao == 3) {
    multiplicacao();
} else if (operacao == 4) {
    divisaoReal();
} else if (operacao == 5) {
    divisaoInteira();
} else if (operacao == 6) {
    potenciacao();
}

}
calculadora();