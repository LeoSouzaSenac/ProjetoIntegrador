// Evento de clique
document.getElementById('clickButton').addEventListener('click', function() {
    alert('Botão clicado!');
});

// Evento de mouseover e mouseout
document.getElementById('mouseoverButton').addEventListener('mouseover', function() {
    alert('Passei com o mouse por cima!');
});
document.getElementById('mouseoverButton').addEventListener('mouseout', function() {
    this.style.backgroundColor = 'red';
});

// Evento de duplo clique
document.getElementById('dblclickButton').addEventListener('dblclick', function() {
    alert('Botão duplo clicado!');
});

// Evento de keydown
document.getElementById('keydownButton').addEventListener('keydown', function(event) {
    alert('Tecla pressionada: ' + event.key);
});

// Evento de focus
document.getElementById('focusButton').addEventListener('focus', function() {
    this.style.backgroundColor = 'lightgreen';
    
});
document.getElementById('focusButton').addEventListener('blur', function() {
    this.style.backgroundColor = '';
});

// Evento de mudança de texto
document.getElementById('changeButton').addEventListener('click', function() {
    this.textContent = 'Texto Mudado!';
});

// Evento de clique com o botão direito
document.getElementById('contextmenuButton').addEventListener('contextmenu', function(event) {
    event.preventDefault();
    alert('Clique com o botão direito detectado!');
});

// Evento de redimensionamento da tela
window.addEventListener('resize', function() {
    document.getElementById('resizeOutput').textContent = `Tamanho da tela: ${window.innerWidth} x ${window.innerHeight}`;
});

// Evento de temporizador
let intervalId;
document.getElementById('intervalButton').addEventListener('click', function() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
        this.textContent = 'Iniciar Temporizador!';
        document.getElementById('intervalOutput').textContent = 'Temporizador parado.';
    } else {
        this.textContent = 'Parar Temporizador!';
        intervalId = setInterval(() => {
            document.getElementById('intervalOutput').textContent = `Tempo decorrido: ${new Date().toLocaleTimeString()}`;
        }, 3000);
    }
});
