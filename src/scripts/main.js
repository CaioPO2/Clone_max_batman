document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');

    const herosection = document.querySelector('.hero');
    const alturahero = herosection.clientHeight;

    window.addEventListener('scroll', function(){
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturahero){
            ocultaelemntoHeader();
        }else{
            exibeelementoHeader();
        }
    })
    
    for (let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(botao){
            const abaAlvo = botao.target.dataset.tabButton
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondetodasAbas();
            aba.classList.add('shows__list--is-active');
            removebotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is-active');
        })
    }
})

function ocultaelemntoHeader(){
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibeelementoHeader(){
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function removebotaoAtivo(){
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function escondetodasAbas(){
    const tabContainers = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabContainers.length; i++){
        tabContainers[i].classList.remove('shows__list--is-active');
    }
}