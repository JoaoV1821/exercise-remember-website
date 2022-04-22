class CadastroView {
    renderError(erro) {
       alert(erro);
    };

    renderSuccess() {
        const textSuccess = $('#text-success');
        textSuccess.text('Cadastro efetuado');
    }
};

