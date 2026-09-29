import { configurarCadastro } from './cadastro.js';
import { configurarModal } from './modal.js';

// SPA - conteúdo dinâmico da página inicial
const conteudoPrincipal = document.querySelector('#conteudo-principal');

const templateInicio = `
    <section>
        <h2>Sobre a ONG</h2>

        <picture>
            <source srcset="../imagens/ong.webp" type="image/webp">
            <img src="../imagens/ong.jpg"
                 alt="Equipe de voluntários participando das ações da ONG">
        </picture>

        <p>
            Nossa ONG desenvolve projetos sociais voltados para a comunidade,
            promovendo solidariedade, inclusão e participação social.
        </p>
    </section>

    <section>
        <h2>Contato</h2>

        <p><strong>Telefone:</strong> (00) 00000-0000</p>
        <p><strong>E-mail:</strong> contato@ong.org.br</p>
        <p><strong>Endereço:</strong> Rua Exemplo, 123 - Centro</p>
    </section>
`;

function renderizarInicio() {
    if (conteudoPrincipal) {
        conteudoPrincipal.innerHTML = templateInicio;
    }
}

if (!window.location.hash || window.location.hash === '#inicio') {
    renderizarInicio();
}

// SPA - conteúdo dinâmico da página de projetos
const templateProjetos = `
    <section>
        <h2>Nossos Projetos</h2>

        <p>
            Conheça as iniciativas e frentes de atuação desenvolvidas
            pela nossa ONG em benefício da comunidade.
        </p>
    </section>

    <div class="grid">
        <section class="col-6" id="voluntariado">
            <h2>Voluntariado</h2>

            <span class="badge">Participação</span>

            <p>
                Você pode participar das atividades desenvolvidas pela ONG
                e contribuir com seu tempo e conhecimento.
            </p>

            <a href="#cadastro">Quero ser voluntário</a>
        </section>

        <section class="col-6" id="doacoes">
            <h2>Doações</h2>

            <span class="badge">Contribuição</span>

            <p>
                Sua contribuição financeira ajuda a manter nossos projetos
                e ampliar o atendimento à comunidade.
            </p>

            <a href="#cadastro">Quero contribuir</a>

            <button type="button" id="abrir-modal">Saiba mais</button>
        </section>
    </div>

    <div id="modal-doacao" class="modal" role="dialog"
         aria-modal="true" aria-labelledby="titulo-modal">

        <div class="modal-conteudo">
            <h2 id="titulo-modal">Como sua doação ajuda</h2>

            <p>
                As doações ajudam a manter os projetos sociais da ONG
                e ampliar o atendimento à comunidade.
            </p>

            <button type="button" id="fechar-modal">Fechar</button>
        </div>
    </div>
`;

// SPA - conteúdo dinâmico da página de cadastro
const templateCadastro = `
    <h2>Faça seu cadastro</h2>

    <div class="alerta" role="alert">
        <strong>Atenção:</strong> Preencha todos os campos obrigatórios antes de enviar o cadastro.
    </div>

    <form>
        <fieldset>
            <legend>Dados pessoais</legend>

            <p>
                <label for="nome">Nome completo:</label>
                <input type="text" id="nome" name="nome" required>
            </p>

            <p>
                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email" required>
            </p>

            <p>
                <label for="nascimento">Data de nascimento:</label>
                <input type="date" id="nascimento" name="nascimento" required>
            </p>

            <p>
                <label for="cpf">CPF:</label>
                <input type="text" id="cpf" name="cpf"
                       maxlength="14"
                       pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                       placeholder="000.000.000-00"
                       required>
            </p>

            <p>
                <label for="telefone">Telefone:</label>
                <input type="tel" id="telefone" name="telefone"
                       maxlength="15"
                       pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}"
                       placeholder="(00) 00000-0000"
                       required>
            </p>
        </fieldset>

        <fieldset>
            <legend>Dados de localização</legend>

            <p>
                <label for="cep">CEP:</label>
                <input type="text" id="cep" name="cep"
                       maxlength="9"
                       pattern="[0-9]{5}-[0-9]{3}"
                       placeholder="00000-000"
                       required>
            </p>

            <p>
                <label for="endereco">Endereço:</label>
                <input type="text" id="endereco" name="endereco" required>
            </p>

            <p>
                <label for="cidade">Cidade:</label>
                <input type="text" id="cidade" name="cidade" required>
            </p>

            <p>
                <label for="estado">Estado:</label>
                <input type="text" id="estado" name="estado" required>
            </p>
        </fieldset>

<div class="acoes-formulario">
    <button type="submit">Enviar cadastro</button>
    <button type="button" id="limpar-cadastro">Limpar cadastro</button>
</div>
    </form>

    <div id="toast" class="toast" role="status" aria-live="polite">
        Cadastro preenchido corretamente!
    </div>
`;

function renderizarRota() {
    if (!conteudoPrincipal) {
        return;
    }

    const rota = window.location.hash || '#inicio';

    if (rota === '#projetos' ||
        rota === '#voluntariado' ||
        rota === '#doacoes') {

        conteudoPrincipal.innerHTML = templateProjetos;

        if (rota === '#voluntariado') {
            document.querySelector('#voluntariado')?.scrollIntoView();
        }

        if (rota === '#doacoes') {
            document.querySelector('#doacoes')?.scrollIntoView();
        }

        configurarModal();

} else if (rota === '#cadastro') {
    conteudoPrincipal.innerHTML = templateCadastro;
configurarCadastro();

} else if (rota === '#inicio') {
    conteudoPrincipal.innerHTML = templateInicio;
}

}

window.addEventListener('hashchange', renderizarRota);

renderizarRota();