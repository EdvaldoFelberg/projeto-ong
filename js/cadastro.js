// Configurações do formulário de cadastro
export function configurarCadastro() {
const formulario = document.querySelector('form');
    const toast = document.querySelector('#toast');
    const campoCpf = document.querySelector('#cpf');
    const campoTelefone = document.querySelector('#telefone');
    const campoCep = document.querySelector('#cep');
    const botaoLimpar = document.querySelector('#limpar-cadastro');

    // Recupera os dados salvos no localStorage
const dadosSalvos = localStorage.getItem('cadastroONG');

if (dadosSalvos) {
    const dadosCadastro = JSON.parse(dadosSalvos);

    document.querySelector('#nome').value = dadosCadastro.nome || '';
    document.querySelector('#email').value = dadosCadastro.email || '';
    document.querySelector('#nascimento').value = dadosCadastro.nascimento || '';
    document.querySelector('#cpf').value = dadosCadastro.cpf || '';
    document.querySelector('#telefone').value = dadosCadastro.telefone || '';
    document.querySelector('#cep').value = dadosCadastro.cep || '';
    document.querySelector('#endereco').value = dadosCadastro.endereco || '';
    document.querySelector('#cidade').value = dadosCadastro.cidade || '';
    document.querySelector('#estado').value = dadosCadastro.estado || '';
}

// Limpa o formulário e os dados armazenados
if (botaoLimpar && formulario) {
    botaoLimpar.addEventListener('click', function () {
        formulario.reset();
        localStorage.removeItem('cadastroONG');
    });
}

    // Toast de confirmação
    if (formulario && toast) {
        formulario.addEventListener('submit', function (event) {
            event.preventDefault();

if (formulario.checkValidity()) {

    const dadosCadastro = {
        nome: document.querySelector('#nome').value,
        email: document.querySelector('#email').value,
        nascimento: document.querySelector('#nascimento').value,
        cpf: document.querySelector('#cpf').value,
        telefone: document.querySelector('#telefone').value,
        cep: document.querySelector('#cep').value,
        endereco: document.querySelector('#endereco').value,
        cidade: document.querySelector('#cidade').value,
        estado: document.querySelector('#estado').value
    };

    localStorage.setItem(
        'cadastroONG',
        JSON.stringify(dadosCadastro)
    );

    toast.classList.add('ativo');

    setTimeout(function () {
        toast.classList.remove('ativo');
    }, 3000);
}
        });
    }

    // Máscara automática para CPF
    if (campoCpf) {
        campoCpf.addEventListener('input', function () {
            let valor = campoCpf.value.replace(/\D/g, '');

            valor = valor.slice(0, 11);

            valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
            valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
            valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

            campoCpf.value = valor;
        });
    }

    // Máscara automática para Telefone
    if (campoTelefone) {
        campoTelefone.addEventListener('input', function () {
            let valor = campoTelefone.value.replace(/\D/g, '');

            valor = valor.slice(0, 11);

            valor = valor.replace(/(\d{2})(\d)/, '($1) $2');
            valor = valor.replace(/(\d{5})(\d{1,4})$/, '$1-$2');

            campoTelefone.value = valor;
        });
    }

    // Máscara automática para CEP
    if (campoCep) {
        campoCep.addEventListener('input', function () {
            let valor = campoCep.value.replace(/\D/g, '');

            valor = valor.slice(0, 8);

            valor = valor.replace(/(\d{5})(\d)/, '$1-$2');

            campoCep.value = valor;
        });
    }
}
