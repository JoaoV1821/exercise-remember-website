class CadastroController {
    constructor(selectors) {
        this.selectors = selectors;
        this.view = new CadastroView();
        this.model = new CadastroModel(this.selectors.email, this.selectors.senha, this.selectors.rg, this.selectors.cep);
    };

    cadastro() {

        try {
            this.model.validaEmail();
            this.view.renderSuccess();

        } catch (error) {
            console.log(typeof (error))
            console.log(error)
            this.view.renderError(`${error}`, 'email-error', this.selectors.email);
        };

        try {
            this.model.validaSenha(this.selectors.confSenha);
            this.view.renderSuccess();

        } catch (error) {
            this.view.renderError(`${error}`, 'senha-error', this.selectors.senha);
        };

        try {
            this.model.validaRg();
            this.view.renderSuccess();

        } catch (error) {
            this.view.renderError(`${error}`, 'rg-error', this.selectors.rg);
        };
    };

    buscaCep() {
        try {
            this.model.buscaCep(this.selectors);

        } catch (error) {
            this.view.renderError(`${error}`, 'cep-error', this.selectors.cep);
        };
    }
};