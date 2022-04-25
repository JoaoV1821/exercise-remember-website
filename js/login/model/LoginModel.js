class LoginModel {
    constructor(email, senha) {
        this._email = email;
        this._senha = senha;
    };

    validaEmail() {
        if (this.email.val() == '') {
            throw new Error('*Este campo é obrigatório');

        } else if (!this.email.val().includes('@') || !this.email.val().includes('.com')) {

            throw new Error('*Email inválido');

        } else {
            return this.email.val();
        };
    };

    validaSenha(confSenha) {
        if (this.senha.val() == '') {
            throw new Error('*Este campo é obrigatório');

        } else if (this.senha.val().length < 8) {
            throw new Error('*A senha deve ter no mínimo 8 caracteres');

        } else if (this.senha.val() !== confSenha.val()) {
            throw new Error('*As senhas não correspondem');

        } else {
            return this.senha.val();
        };
    };

    get email() {
        return this._email;
    };

    get senha() {
        return this._senha;
    };
}