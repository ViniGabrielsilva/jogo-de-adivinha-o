let numeroSecreto;
let tentativas = 0;
let maxTentativas;
let pontos = 0;
let timerInterval;
let tempo = 0;

document.getElementById('nivel').addEventListener('change', function() {
    resetarJogo();
});

document.getElementById('adivinhar').addEventListener('click', function() {
    const palpite = Number(document.getElementById('palpite').value);
    tentativas++;
    
    const resultado = document.getElementById('resultado');
    const historico = document.getElementById('historico');

    // Adiciona o palpite ao histórico
    historico.innerText += `${palpite} `;

    if (palpite === numeroSecreto) {
        pontos += maxTentativas - tentativas + 1; // Ganha pontos
        resultado.innerText = `Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativas!`;
        clearInterval(timerInterval); // Para o cronômetro
        document.getElementById('reiniciar').style.display = 'block';
        document.getElementById('adivinhar').disabled = true;
    } else if (tentativas >= maxTentativas) {
        resultado.innerText = `Você atingiu o limite de tentativas! O número era ${numeroSecreto}.`;
        clearInterval(timerInterval);
        document.getElementById('reiniciar').style.display = 'block';
        document.getElementById('adivinhar').disabled = true;
    } else if (palpite < numeroSecreto) {
        resultado.innerText = 'Muito baixo! Tente novamente.';
    } else {
        resultado.innerText = 'Muito alto! Tente novamente.';
    }
    
    document.getElementById('pontos').innerText = `Pontos: ${pontos}`;
});

// Reiniciar o jogo
document.getElementById('reiniciar').addEventListener('click', function() {
    resetarJogo();
});

function resetarJogo() {
    tentativas = 0;
    tempo = 0;
    clearInterval(timerInterval); // Para o cronômetro
    document.getElementById('palpite').value = '';
    document.getElementById('resultado').innerText = '';
    document.getElementById('historico').innerText = 'Histórico de Palpites: ';
    document.getElementById('reiniciar').style.display = 'none';
    document.getElementById('adivinhar').disabled = false;

    const nivel = document.getElementById('nivel').value;
    switch (nivel) {
        case 'easy':
            maxTentativas = 10;
            numeroSecreto = Math.floor(Math.random() * 50) + 1;
            break;
        case 'medium':
            maxTentativas = 10;
            numeroSecreto = Math.floor(Math.random() * 100) + 1;
            break;
        case 'hard':
            maxTentativas = 15;
            numeroSecreto = Math.floor(Math.random() * 200) + 1;
            break;
    }

    // Iniciar o cronômetro
    timerInterval = setInterval(() => {
        tempo++;
        document.getElementById('timer').innerText = `Tempo: ${tempo}s`;
    }, 1000);
}
let palpitesArray = []; // Array para armazenar os palpites

document.getElementById('adivinhar').addEventListener('click', function() {
    const palpite = Number(document.getElementById('palpite').value);
    tentativas++;
    
    const resultado = document.getElementById('resultado');
    const historico = document.getElementById('historico');

    // Adiciona o palpite ao array e atualiza o histórico
    palpitesArray.push(palpite);
    historico.innerText = `Histórico de Palpites: ${palpitesArray.join(', ')}`;

    // Restante do código...
});
