//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
listaAmigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.querySelector('input');
    let valorAmigo = nomeAmigo.value.trim()

    if (valorAmigo == '' || valorAmigo == ' ') { // Pra ter certeza de que o item a ser adicionado na lista não está vazio
        alert('Por favor, insira um nome válido')
        nomeAmigo.value = '';
        mensagemInicial() // 
    } else if (/\d/.test(valorAmigo)) { // Se esse teste for true, retorna um alert e limpa o espaço do input. /\d/ verifica se existem números na variável valorAmigo, o teste retorna true ou false para a verificação
        alert('Por favor, insira um nome válido(Números detectados)');
        nomeAmigo.value = ''
        mensagemInicial();
    } else {
        listaAmigos.push(valorAmigo);
        nomeAmigo.value = '';
        mostrarUL(); // Chama a função que cria a lista visual
    }

}

function mostrarUL() { // Tentei de algumas formas utilizar um loop for para percorrer a lista, criar item lists e dar seus valores, mas tive problemas de duplicação e optei por fazer assim
    let listaHTML = document.querySelector('ul');
    const ultimoAmigo = listaAmigos[listaAmigos.length - 1] // Pega sempre o último elemento da lista
    let li = document.createElement('li'); // cria o item list
    li.textContent = ultimoAmigo;  // Dá ao item list o conteúdo do último índice da lista
    listaHTML.appendChild(li); // linka o item list novo a ul
}

function resetarUl(){
    let listaHTML = document.querySelector('ul');
    listaHTML.innerHTML = '';
    listaAmigos = [];
}

function sortearAmigo() {
    if (listaAmigos.length <= 1) {
        alert('Número de amigos inválido, insira 2 ou mais nomes para continuar.')
    }
    let amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    console.log(amigoSorteado);
    // Inserir mensagem de parabéns utilizando fstring com o nome do sorteado e refresh na página
    let parabensMensagem = document.querySelector('h1');
    let proximoJogoMensagem = document.querySelector('h2');
    parabensMensagem.textContent = ('Parabéns ' + amigoSorteado + ' você foi sorteado(a)!');
    proximoJogoMensagem.textContent = ('Quer realizar outro sorteio ? Insira os nomes novamente!');
    resetarUl();

}

function mensagemInicial(){
    let mensagem = document.querySelector('h1');
    let mensagem2 = document.querySelector('h2');
    mensagem.textContent = 'Amigo Secreto';
    mensagem2.textContent = 'Digite o nome dos seus amigos';
}