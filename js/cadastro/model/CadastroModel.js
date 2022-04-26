class CadastroModel {
    constructor(email, senha, rg, cep) {
        this._email = email;
        this._senha = senha;
        this._rg = rg;
        this._cep = cep;
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

    validaRg() {
        if (this.rg.val() == '') {
            throw new Error('*Este campo é obrigatório');

        } else {
            for (let i = 0; i < rg.length; i++) {
                if (this.rg.val()[i] == '.' || this.rg.val()[i] == '-') {
                    this.rg.val() = this.rg.val().replace(this.rg.val()[i], '');
                };
            };

            if (this.rg.val().length < 9) {
                console.log(this.rg.val());
                throw new Error('*RG inválido');
            };
        };

        return this.rg.val();
    };

    buscaCep(selectors) {
        const data = {
            estado: '',
            cidade: '',
            bairro: '',
            complemento: '',
            rua: '',
        };

        if (this.cep.val() == '') {
            throw new Error('*Este campo é obrigatório');

        } else {
            for (let i = 0; i < this.cep.val().length; i++) {
                if (this.cep.val()[i] == '-') {
                    this.cep.val(this.cep.val().replace(this.cep.val()[i], ''))
                }
            };

            if (this.cep.val().length < 8 || this.cep.val().length > 8) {
                throw new Error('*CEP inválido');

            } else {
                const url = `https://viacep.com.br/ws/${this.cep.val()}/json/`;

                $.ajax({
                    type: "GET",
                    url: url,

                }).done((response) => {

                    if (response.erro) {
                        throw new Error('*CEP inválido');

                    } else {
                        data['estado'] = response.uf;
                        data['cidade'] = response.localidade;
                        data['bairro'] = response.bairro;
                        data['complemento'] = response.complemento;
                        data['rua'] = response.logradouro;

                        $(`#${data.estado}`).attr('selected', 'true');
                        
                        selectors.cidade.val(data.cidade);
                        selectors.bairro.val(data.bairro);
                        selectors.rua.val(data.rua);
                        selectors.complemento.val(data.complemento);
                    };

                }).fail((xhr, status) => {
                    xhr.abort()
                });
            };
        };
    };

    get email() {
        return this._email;
    };

    get senha() {
        return this._senha;
    };

    get rg() {
        return this._rg;
    }

    get cep() {
        return this._cep;
    };
};