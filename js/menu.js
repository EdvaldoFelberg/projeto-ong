export function configurarMenu() {
    const botaoMenu = document.querySelector('.menu-hamburguer');
    const menuLinks = document.querySelector('.menu-links');

    if (botaoMenu && menuLinks) {
        botaoMenu.addEventListener('click', function () {
            menuLinks.classList.toggle('ativo');

            const menuAberto = menuLinks.classList.contains('ativo');

            botaoMenu.setAttribute('aria-expanded', menuAberto);

            botaoMenu.setAttribute(
                'aria-label',
                menuAberto ? 'Fechar menu' : 'Abrir menu'
            );
        });
    }
}