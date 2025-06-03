// PARA MANTER A BOA PRÁTICA: EXPLANAÇÃO DO CÓDIGO PARA REFORÇAR LÓGICA E DEMONSTRAÇÃO DE CONHECIMENTO AO PROFESSOR SANDRO
// Este código reaproveita a estrutura HTML programada na página da carga elétrica, então sua disposição é semelhante.

// Primeira etapa: Definir as funções que serão utilizadas, uma para calcular a força elétrica e outra para limpar os campos de entrada e o resultado.
// A função calcular() recebe os valores dos inputs fornecidos pelo usuário e efetua a fórmula da interação entre cargas 

const resultadoElement = document.getElementById('resultado'); // Como o resultado é um campo que será utilizado várias vezes, declaro uma variável para ele no escopo global

function calcular() {
    const k = 8.99e9; // Como o valor de k na fórmula é uma constante, declaro sua variável como const e atribuo seu valor por definição.

    // As subsequentes linhas são declarações das variáveis a serem manipuladas nessa função, que capturam os valores dos inputs do usuário.
    let q1 = parseFloat(document.getElementById('carga1').value); 
    let q2 = parseFloat(document.getElementById('carga2').value);
    let d = parseFloat(document.getElementById('distancia').value);

    // Aqui é um bloco condicional que verifica se os valores inseridos são válidos. "isNan" significa "is not a number", caso seja, defini uma mensagem de erro estilizada para o usuário.
    if (isNaN(q1) || isNaN(q2) || isNaN(d)) {
        resultadoElement.innerHTML = "Por favor, insira valores numéricos válidos em todos os campos.";
        resultadoElement.className = "error show";
        return;
    }

    if (d <= 0) { // para deixar a verificação mais robusta, crio uma segunda validação, específica para a distância, que não pode ser zero ou negativa na fórmula.
        resultadoElement.innerHTML = "A distância deve ser maior que zero.";
        resultadoElement.className = "error show"; 
        return;
    }
    // declaro as variáveis referentes à fórmula da força elétrica e efetuo as operações necessárias.
    let forca = (k * Math.abs(q1 * q2)) / Math.pow(d, 2); //Math.abs() retorna o valor absoluto de um número, garantindo que a força seja sempre positiva
                                                          //math.pow() eleva o número à potência especificada, substituição limpa do operador (d*d)
    let forcaFormatada = forca.toExponential(2); //toExponential() formata o número em notação científica com 2 casas decimais
                                                 // Utilizei o método toExponential() ao invés do toFixed() por conta do contexto do cálculo, como os valores que envolvem esse tipo
                                                 // de cálculo alternam nos extremos entre muito grandes ou muito pequenos, o ideal é utilizar a notação científica para melhor legibilidade
                                                 // recurso que o toFixed() não oferece, visto que sua aplicação é para números menores e arredondamentos. 

    resultadoElement.innerHTML = `Força elétrica: <strong>${forcaFormatada} N</strong>`; // Imprime o resultado do cálculo na tela, e estilizado com HTMl para destacar a resposta.
    resultadoElement.className = "success show";
}

// Por último, a função limpar() obtem os valores de todos os campos que eu quero limpar, e os atribui o valor vazio. 
function limpar() {
    
    document.getElementById('carga1').value = '';
    document.getElementById('carga2').value = '';
    document.getElementById('distancia').value = '';
    
    
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = '';
    resultadoElement.className = '';
}