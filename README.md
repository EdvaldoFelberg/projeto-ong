# ONG Solidariedade

Projeto web desenvolvido durante a disciplina de Desenvolvimento Front-end, com o objetivo de criar uma aplicação para uma organização não governamental (ONG), aplicando conceitos de HTML5, CSS3 e JavaScript.

## Funcionalidades

- Página inicial com apresentação da ONG e informações de contato;
- Página de projetos sociais;
- Área de voluntariado e doações;
- Formulário de cadastro;
- Validação dos campos do formulário;
- Máscaras automáticas para CPF, telefone e CEP;
- Armazenamento dos dados no localStorage;
- Navegação dinâmica utilizando o conceito de Single Page Application (SPA);
- Modal com informações sobre doações;
- Feedback visual após o envio do cadastro;
- Organização modular do código JavaScript.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Web Storage (localStorage)
- ES6 Modules
- Git
- GitHub

## Estrutura do projeto

projeto-ong/
- css/
  - style.css
- html/
  - index.html
  - projetos.html
  - cadastro.html
- imagens/
  - ong.jpg
  - ong.png
  - ong.webp
- js/
  - cadastro.js
  - main.js
  - menu.js
  - modal.js
  - script.js
  - spa.js
- .gitignore
- README.md

## Acessibilidade

O projeto utiliza práticas básicas de acessibilidade, como HTML semântico, textos alternativos em imagens, associação entre `label` e campos de formulário, além do uso de `fieldset` e `legend` para organizar os dados. Também foram utilizados atributos `role` em elementos de interação e feedback.

## Versionamento

O projeto utiliza Git e GitHub para controle de versões, seguindo uma organização baseada no GitFlow.

Branches utilizadas:

- `main`: versão principal e estável;
- `develop`: desenvolvimento contínuo;
- `feature/cadastro`: branch destinada às funcionalidades relacionadas ao cadastro.

Os commits são organizados utilizando o padrão de commits semânticos.

## Pré-requisitos

Para executar o projeto localmente é necessário:

- Navegador web atualizado;
- Visual Studio Code ou outro editor de código;
- Servidor local, como a extensão Live Server do Visual Studio Code;
- Git instalado, caso seja necessário clonar o repositório.

## Instalação e execução local

1. Clone o repositório utilizando o comando:
   `git clone https://github.com/EdvaldoFelberg/projeto-ong.git`

2. Abra a pasta `projeto-ong` no Visual Studio Code.

3. Inicie um servidor local utilizando a extensão Live Server.

4. Acesse o arquivo `html/index.html` pelo servidor local.

5. A aplicação será aberta no navegador, permitindo acessar as páginas e funcionalidades do projeto.

O projeto utiliza HTML, CSS e JavaScript no front-end e não necessita de instalação de dependências adicionais para sua execução atual.

## Autor

Felberg