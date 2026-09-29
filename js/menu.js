export function configurarMenu() {
    const botaoMenu = document.querySelector('.menu-hamburguer');
    const menuLinks = document.querySelector('.menu-links');

    if (botaoMenu && menuLinks) {
        botaoMenu.addEventListener('click', function () {
            menuLinks.classList.toggle('ativo');
        });
    }
}