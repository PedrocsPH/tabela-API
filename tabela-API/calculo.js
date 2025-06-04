// Irei documentar o código feito para que, além de exercitar a lógica de programação, eu demonstre pro professor que esse código é de minha autoria.Add commentMore actions

// Primeira etapa: Criar a estrutura HTML básica, com as informações e os dois botões operadores, o de calcular e o de limpar;
// Nessa função calcular, começo declarando as variáveis que serão manipuladas, como o valor "número de elétrons", que captura o valor inserido pelo usuário no input correspondente ao número de elétrons;
// Por fim, das declarações iniciais, faço uma variável para o resultado, que irá exibir na tela o resultado do cálculo que irei programar;
function calcular() {
    const numeroEletrons = document.getElementById('numero-eletrons').value;
    const resultadoElement = document.getElementById('resultado');
    
    // Verifico se o número de elétrons é um valor válido, ou seja, se não está vazio e se é um número maior ou igual a zero, para evitar situações em que a calculadora não conseguiria operar como o esperado.
    
    if (numeroEletrons == "" || numeroEletrons < 0) {
        resultadoElement.innerHTML = "Por favor, insira um número válido de elétrons.";
        resultadoElement.classList.add('show', 'error');
        resultadoElement.classList.remove('success');
        return;
    }
    // Caso o número inserido passe pela condicional de validação, eu efetuo o cálculo da carga elétrica descrito, começo declarando a variável "cargaElementar" como const, afinal seu valor não muta ao longo do código, é fixo;
    // Em seguida, declaro a variável "cargaTotal" que irá receber o valor do input e multiplicar pelo valor da carga elementar, que é o resultado a ser impresso na tela;
    // Por fim, formato o resultado para a exibição, utilizando o método toExponential para exibir o número em notação científica (caso contrário o número quebrado poderia ser gigantesco, sendo visualmente ruim);
    // Também adiciono as classes CSS para estilizar o resultado
    const cargaElementar = 1.6e-19;
    let cargaTotal = numeroEletrons * cargaElementar;
    let cargaTotalFormatado = cargaTotal.toExponential(2) + ' C';
    resultadoElement.innerHTML = `Carga elétrica total: <strong>${cargaTotalFormatado}</strong>`;
    resultadoElement.classList.add('show', 'success');
    resultadoElement.classList.remove('error');
}

// Última etapa: Crio a função de limpar os campos, que reseta os valores do input e do resultado, além de remover as classes de exibição e estilo
function limpar() {
    document.getElementById('numero-eletrons').value = '';
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = '';
    resultadoElement.classList.remove('show', 'success', 'error');
}