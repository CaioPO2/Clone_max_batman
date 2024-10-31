document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    
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