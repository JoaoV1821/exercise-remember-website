class CadastroView {
    renderError(erro, seletor) {
        seletor.text(erro);
        seletor.css('color', 'red');
    };

    renderSuccess() {
        const textSuccess = $('#text-success');
        textSuccess.text('Cadastro efetuado');
    }
};

