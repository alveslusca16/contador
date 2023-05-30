const tela = document.querySelector('#tela');

const soma = document.querySelector('#num');

function mais(){
    let i = 1;
    i = soma.value;
    tela.innerHTML = `${parseInt(tela.innerText) + parseInt(i)}`;
}

function menos(){
    let i = 1;
    i = soma.value;
    tela.innerHTML = `${parseInt(tela.innerText) - parseInt(i)}`;
}

function reiniciar(){
    let a = 0;
    tela.innerHTML = `${parseInt(a)}`;
}