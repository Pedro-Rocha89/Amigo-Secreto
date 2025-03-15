//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    const amigoInput = document.getElementById('amigo');
    const nome = amigoInput.value.trim();

    if (nome === '') {
        alert("Por favor, digite um nome válido.");
        return;
    }

    amigos.push(nome);
    atualizarListaAmigos();
    amigoInput.value = '';
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear.");
        return;
    }

    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    exibirResultado(amigoSorteado);
}

function exibirResultado(amigoSorteado) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    const li = document.createElement('li');
    li.textContent = `O amigo sorteado foi: ${amigoSorteado}`;
    resultado.appendChild(li);
}


