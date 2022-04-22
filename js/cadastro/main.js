const main = () => {
    const controller = new CadastroController();
    const dataSelectors = {};

    dataSelectors.email = $('#email').val()
    dataSelectors.senha = $('#senha').val()
    dataSelectors.confSenha = $('#confSenha').val();
    dataSelectors.rg = $('#rg').val()
    dataSelectors.cep = $('#cep').val()
    dataSelectors.estado = $('#estado')
    dataSelectors.cidade = $('#cidade')
    dataSelectors.bairro = $('#bairro')
    dataSelectors.rua = $('#rua');
    dataSelectors.complemento = $('#complemento')

    controller.cadastro(dataSelectors)
};

$('#submit').click( (event) => { 
    event.preventDefault();
    main();
});