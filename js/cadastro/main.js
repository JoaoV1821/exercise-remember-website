const selectors = {};
const buttom = $('#submit');
const cepSubmit = $('#cep-submit');

selectors.email = $('#email');
selectors.senha = $('#senha');
selectors.confSenha = $('#confSenha');
selectors.rg = $('#rg');
selectors.cep = $('#cep');
selectors.estado = $('#estado');
selectors.cidade = $('#cidade');
selectors.bairro = $('#bairro');
selectors.complemento = $('#complemento');
selectors.rua = $('#rua');


const controller = new CadastroController(selectors);

buttom.click((event) => {
    event.preventDefault();
    controller.cadastro()
});

cepSubmit.click((event) => {
    event.preventDefault();
    controller.buscaCep();
});