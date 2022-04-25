class LoginController {
    constructor(selectors) {
        this._selectors = selectors;
        this._model = new LoginModel(selectors.email, selectors.senha);
        this._view = new LoginView();
    };

    login() {
        try {
            this.model.validaEmail();
           
        } catch (error) {
            this.view.renderError(`${error}`, 'email-error', this.selectors.email )
        };

        try {
            this.model.validaSenha();

        } catch(error) {
            this.view.renderError(`${error}`, 'senha-error', this.selectors.senha);
        };
    };

    get selectors() {
        return this._selectors;
    };

    get model() {
        return this._model;
    };

    get view() {
        return this._view
    };
};