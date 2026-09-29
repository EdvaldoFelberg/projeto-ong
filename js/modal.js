export function configurarModal() {
    const abrirModal = document.querySelector('#abrir-modal');
    const fecharModal = document.querySelector('#fechar-modal');
    const modalDoacao = document.querySelector('#modal-doacao');

    if (abrirModal && fecharModal && modalDoacao) {
        abrirModal.addEventListener('click', function () {
            modalDoacao.classList.add('ativo');
        });

        fecharModal.addEventListener('click', function () {
            modalDoacao.classList.remove('ativo');
        });
    }
}