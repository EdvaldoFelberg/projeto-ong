export function configurarModal() {
    const abrirModal = document.querySelector('#abrir-modal');
    const fecharModal = document.querySelector('#fechar-modal');
    const modalDoacao = document.querySelector('#modal-doacao');

    if (abrirModal && fecharModal && modalDoacao) {
        abrirModal.addEventListener('click', function () {
            modalDoacao.classList.add('ativo');
            fecharModal.focus();
        });

        fecharModal.addEventListener('click', function () {
            modalDoacao.classList.remove('ativo');
            abrirModal.focus();
        });

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape' && modalDoacao.classList.contains('ativo')) {
                modalDoacao.classList.remove('ativo');
                abrirModal.focus();
            }
        });
    }
}