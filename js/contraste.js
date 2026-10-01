// Configura o modo de alto contraste
export function configurarContraste() {
    const botaoContraste = document.querySelector('#alternar-contraste');

    if (botaoContraste) {
        botaoContraste.addEventListener('click', function () {
            document.body.classList.toggle('alto-contraste');

            const contrasteAtivo =
                document.body.classList.contains('alto-contraste');

            botaoContraste.setAttribute(
                'aria-pressed',
                contrasteAtivo
            );

            botaoContraste.textContent =
                contrasteAtivo
                    ? 'Desativar alto contraste'
                    : 'Alto contraste';
        });
    }
}